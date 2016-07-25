
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('healthcare', [
  'ui.router',
  'ui.bootstrap',
  'angular-loading-bar'
])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 100;   // always scroll by 100 extra pixels
}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('Login');
  $stateProvider.state('Login', {
    url: '/Login',
    templateUrl: 'app/modules/login/views/credentials.html',
    controller: 'LoginCTRL'
  });

  $stateProvider.state('InfectionControl', {
    url: '/InfectionControl',
    templateUrl: 'app/modules/InfectionControl/views/dashboards.html',
    controller: 'InfectionControlCtrl'
  });
}]);

// http://stackoverflow.com/a/14968873/2552551
var underscore = angular.module('underscore', []);
underscore.factory('underscore', ['$window', function() {
  return $window._; // assumes underscore has already been loaded on the page
}]);