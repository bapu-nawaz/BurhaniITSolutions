/**
 * Copyright RIKSOF (Private) Limited 2015 All Rights Reserved.
 *
 * THIS WORK CONTAINS TRADE SECRET AND PROPRIETARY INFORMATION WHICH IS THE
 * PROPERTY OF RIKSOF (PRIVATE) LIMITED OR ITS LICENSORS AND IS SUBJECT TO LICENSE TERMS.
 *
 * Developer: Zeeshan Lalani
 *
 */
 
// Get the configurations
var config = require( __dirname + '/config' );

// Our logger for logging to file and console
var logger = require( __dirname + '/logger' );

// Instance for express server
var express = require( 'express' );
var cookieParser = require('cookie-parser');
var session = require('express-session');
var compression = require('compression');
var bodyParser = require('body-parser');

var app = module.exports =express();

app.use(cookieParser());
app.use(session({
	secret: '1234567890QWERTY',
	resave: true,
    saveUninitialized: true
}));

// We want to gzip all our content before sending.
app.use( compression() );

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

//app.use( express.urlencoded() );

var git = require('git-rev')

// set current git version as app local variable
// this will be used for versioning files
git.long(function (str) {
   app.locals.version = str;
})


var contentServer = require( __dirname + '/providers/StaticContentServer' );
contentServer.setup( app );

var redirect = require( __dirname + '/providers/redirect' );
redirect.setup( app );

// Start the http server
var httpServer;

// SSL Configurations
if ( config.http.enableSSL ) {
	// We will use https
	var https = require('https');
	
	// The certificate and ssl key
	var fs = require('fs');
	var privateKey  = fs.readFileSync( config.http.serverKey, 'utf8');
	var certificate = fs.readFileSync( config.http.serverCertificate, 'utf8');
	var chain = fs.readFileSync( config.http.serverChain, 'utf8');

        var options = {
                key: privateKey,
                cert: certificate,
                ca: chain
        };
	

	// Create the server
	httpsServer = https.createServer(options, app);
	// Make the server listen
	httpsServer.listen( config.http.port );

} else {
	var http = require('http');
	httpServer = http.createServer(app);
	// Make the server listen
	httpServer.listen( config.http.port );
}


logger.info( 'Listening on port ' + config.http.port + ' with SSL ' + config.http.enableSSL );
