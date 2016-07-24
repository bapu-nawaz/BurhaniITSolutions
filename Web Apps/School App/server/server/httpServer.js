/**
 * Copyright RIKSOF (Private) Limited 2015 All Rights Reserved.
 *
 * THIS WORK CONTAINS TRADE SECRET AND PROPRIETARY INFORMATION WHICH IS THE
 * PROPERTY OF RIKSOF (PRIVATE) LIMITED OR ITS LICENSORS AND IS SUBJECT TO LICENSE TERMS.
 *
 * Developer: Muhamamd Zeeshan
 *
 */

var express = require( 'express' );
var app = module.exports =express();

var http = require('http');
httpServer = http.createServer(app);

// set up a route to redirect http to https
app.use(function requireHTTPS(req, res, next) {
  if (!req.secure) {
    return res.redirect('https://aptmobile.ie');
  }
  next();
})


// Make the server listen
httpServer.listen( 80 );