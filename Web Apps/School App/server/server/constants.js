/**
 * This module is responsible for maintaining all constants
 * that are used site wide.
 */
var constants = {};

constants.app = {};


//Client minified files
constants.app.clientScriptName = 'client.min.js';
constants.app.clientScriptMap = 'client.min.js.map';
constants.app.clientCssName = 'client.min.css';

var client_path = __dirname.substr(0, __dirname.indexOf('/server')) + '/client';
var bower_path = client_path + '/bower_components';
var path = require('path');

// client js files
constants.app.clientFiles = [
    client_path + '/app/app.js',
    client_path + '/app/auth.js',
    client_path + '/app/storage/form-storage-service.js',
    client_path + '/app/storage/prb-storage-service.js',
    client_path + '/app/storage/user-storage-service.js',
    client_path + '/app/services/background-service.js',
    client_path + '/app/services/api-service.js',
    client_path + '/app/services/auth-service.js',
    client_path + '/app/services/modal-service.js',
    client_path + '/app/services/master-section-service.js',
    client_path + '/app/services/photo-object-services.js',
    client_path + '/app/services/user-mgmt-service.js',


    client_path + '/app/modules/home/main-ctrl.js',
    client_path + '/app/modules/user/module.js',
    client_path + '/app/modules/user/login-ctrl.js',
    client_path + '/app/modules/home/module.js',
    client_path + '/app/modules/home/home-ctrl.js',
    client_path + '/app/modules/home/createform-ctrl.js',
    client_path + '/app/modules/home/menu-directive.js',
    client_path + '/app/modules/home/dashboard-directive.js',
    client_path + '/app/modules/home/modal-dialog-directive.js',
    client_path + '/app/modules/home/usermanagement-ctrl.js',
    // camera/image upload
    client_path + '/app/modules/common/image-dialog-directive.js',
    client_path + '/app/modules/common/image-dialog-ctrl.js',
    client_path + '/app/modules/common/camera-ctrl.js',

    client_path + '/app/modules/common/signature-directive.js',
    client_path + '/app/modules/common/signature-ctrl.js',
    client_path + '/app/modules/common/drawing.js',
    client_path + '/app/modules/common/utils.js',

    client_path + '/app/modules/form/module.js',
    client_path + '/app/modules/form/prbform-ctrl.js',
    client_path + '/app/modules/form/section-amlid-ctrl.js',
    client_path + '/app/modules/form/section-clientdetails-ctrl.js',
    client_path + '/app/modules/form/section-termsofbusiness-ctrl.js',
    client_path + '/app/modules/form/section-factfind-ctrl.js',
    client_path + '/app/modules/form/section-suitabilityandappropriatness-ctrl.js',
    client_path + '/app/modules/form/section-riskassessment-ctrl.js',
    client_path + '/app/modules/form/section-chargesconfirmation-ctrl.js',
    client_path + '/app/modules/form/termsandconditions-ctrl.js',

    client_path + '/app/modules/form/appendix1-ctrl.js',
    client_path + '/app/modules/form/appendix2-ctrl.js',

    client_path + '/app/models/form.js',
    client_path + '/app/models/prb-data.js',

];

// client css files
constants.app.clientCssFiles = [
    client_path + '/app/assets/css/style.css',
    client_path + '/app/assets/css/main.css',
    client_path + '/app/assets/css/modal.css',
    client_path + '/app/assets/css/bootstrap.3.3.4.min.css',
    bower_path + '/angular-loading-bar/build/loading-bar.min.css',
];


module.exports = constants;