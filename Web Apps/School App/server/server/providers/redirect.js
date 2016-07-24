/**
 * This module is responsible for configuring how the server
 * handles requests for static content, images, javascript
 * and html
 */

// Reference to the module to be exported
redirect = module.exports = {};

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
redirect.setup = function( app ) {
    // Get the configurations
    var config = require( __dirname + '/../config' );
    var constant = require( __dirname + '/../constants' );

    // Our logger for logging to file and console
    var logger = require( __dirname + '/../logger' );
    app.all('/api/webforms', function(req, res) {
             var request = require('request');
             data = req.body;
             logger.info('BODY', req.body);
             var responseJSON = {};

             var jsonData = JSON.stringify(data);

             request.post({
              url: config.serverUrl + '?data=' + jsonData},
              function(error,httpResponse,body){
                if (error) {
                     // set on logger
                     logger.error(JSON.stringify(error));
                     responseJSON.status = 'FAIL';
                     responseJSON.message = JSON.stringify(error);
                     // Response to client.
                     res.jsonp(200, responseJSON);
                 }

                 responseJSON.status = 'OK';
                 responseJSON.body = body;
                 res.jsonp(200, responseJSON);
            })
         });
};