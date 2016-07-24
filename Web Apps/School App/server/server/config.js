/**
 * This module is responsible for maintaining all configurations
 * that are used site wide.
 */
var config = {};

// Application Information
config.app = {};
config.app.mode = {};
config.app.user = {};
config.app.errorUrl   = '/error';
config.app.mode.DEVELOPMENT = 'development';
config.app.mode.PRODUCTION = 'production';
config.app.mode.current = config.app.mode.DEVELOPMENT;

// HTTP server configuration
config.http = {};
config.http.port = (config.app.mode.current == config.app.mode.DEVELOPMENT ) ? 8000 : 8000;
config.http.enableSSL = false;


config.serverUrl = 'http://192.168.9.185:9090/health-care-server/app/save-forms';

config.http.serverKey = __dirname + '/../../../certificate/apt-key.pem';
config.http.serverCertificate = __dirname + '/../../../certificate/aptmobile.ie.cer';
config.http.serverChain = __dirname + '/../../../certificate/chain.cer';


// Log files
config.logger = {};
config.logger.errorFile = __dirname + '/../logs/error.log';
config.logger.consoleFile = __dirname + '/../logs/console.log';
config.logger.maxFileSize = 1000000;
config.logger.maxFiles = 1;

// Status Codes
config.statusCode = {
	'Forbidden' : 403,
	'Unauthorized' : 401,
	'OK' : 200,
	'Fail' : 500
};

module.exports = config;