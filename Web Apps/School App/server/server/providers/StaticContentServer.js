/**
 * This module is responsible for configuring how the server
 * handles requests for static content, images, javascript
 * and html
 */

// Reference to the module to be exported
contentServer = module.exports = {};

/**
 * Setup takes an express application server and configures
 * it to handle JavaScript requests. If the server is being
 * run in development mode, then we expose these directories:
 *
 * - js
 * - libs
 * - tests
 *
 * Otherwise, only the libs directory is exposed. Contents of
 * the js directory are combined to a minimised javascript file.
 */
contentServer.setup = function( app ) {
	// Get the configurations
	var config = require( __dirname + '/../config' );

	var constant = require( __dirname + '/../constants' );
	
	
	// Serve the libs folder
	var express = require('express');	
	
	app.use( '/', express.static( __dirname + '/../../../' ));	

	app.use( '/assets', express.static( __dirname + '/../../../app/assets/' ));

	 app.use( '/libs', express.static( __dirname + '/../../../bower_components/' ));

	// app.use( '/images', express.static( __dirname + '/../../../client/app/assets/images/' ));

	// app.use('/pdf', express.static( __dirname + '/../../../client/app/assets/pdf/' ))
	// app.use( '/version',  function(req, res) {
	//   res.send("var version = '" + app.locals.version + "';" + "var env = '" + config.app.mode.current + "';");
	// });

	// // Build the compressed file to be used in production
	// var UglifyJS = require("uglify-js");
	

	// //client minified
	// var clientJsProduction = UglifyJS.minify( constant.app.clientFiles, {
	// 	outSourceMap: constant.app.clientScriptMap
	// });

	// var uglifycss = require('uglifycss');
	
	// var clientCssProduction = uglifycss.processFiles( constant.app.clientCssFiles, {
	// 	maxLineLen: 0,
	// 	expandVars: false,
	// 	cuteComments: true
	// });

	// // Serve the minimized client app js file
	// app.get( '/' + constant.app.clientScriptName, function(req, res) {
	//     res.setHeader( 'X-SourceMap', '/' + constant.app.clientScriptMap );
	//     res.setHeader( 'Content-Type', 'text/javascript' );
	//     res.setHeader( 'Content-Length', clientJsProduction.code.length );
	//     res.end( clientJsProduction.code );
	// });
	
	// // Serve the minimized client app map js file
	// app.get( '/' + constant.app.clientScriptMap, function(req, res) {
	//   res.setHeader( 'Content-Type', 'text/javascript' );
	//   res.setHeader( 'Content-Length', clientJsProduction.map.length );
	//   res.end( clientJsProduction.map );
	// });

	// // Serve the minimized client app css file
	// app.get( '/' + constant.app.clientCssName, function(req, res) {
	//     res.setHeader( 'Content-Type', 'text/css' );
	//     res.setHeader( 'Content-Length', clientCssProduction.length );
	//     res.end( clientCssProduction );
	// });

	// // Generate error to test correct handling
	// app.get( config.app.errorUrl, function(req, res) {
	//     throw 'This is a generated error. All requests to this URL will always throw this error';
	// });
}