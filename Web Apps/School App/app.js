
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

  $urlRouterProvider.otherwise('dashboards');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/modules/home/views/home.html'     
  });

  $stateProvider.state('InfectionControl', {
    url: '/InfectionControl',
    templateUrl: 'app/modules/InfectionControl/views/dashboards.html',
    controller: 'InfectionControlCtrl'
  });

  $stateProvider.state('BloodProduct', {
    url: '/BloodProduct',
    templateUrl: 'app/modules/BloodProduct/views/dashboards.html',
    controller: 'BloodProductCtrl'
  });

  $stateProvider.state('FinancialManagement', {
    url: '/FinancialManagement',
    templateUrl: 'app/modules/FinancialManagement/views/dashboards.html',
    controller: 'FinancialManagementCtrl'
  });

  $stateProvider.state('QIPS', {
    url: '/QIPS',
    templateUrl: 'app/modules/QIPS/views/dashboards.html',
    controller: 'QIPSCtrl'
  });

  $stateProvider.state('ClinicalPerformance', {
    url: '/ClinicalPerformance',
    templateUrl: 'app/modules/clinicalPerformance/views/dashboards.html',
    controller: 'ClinicalPerformanceCtrl'
  });

  $stateProvider.state('HumanResource', {
    url: '/HumanResource',
    templateUrl: 'app/modules/HumanResource/views/dashboards.html',
    controller: 'HumanResourceCtrl'
  });

  $stateProvider.state('Supplies', {
    url: '/Supplies',
    templateUrl: 'app/modules/Supplies/views/dashboards.html',
    controller: 'SuppliesCtrl'
  });

  $stateProvider.state('MedicationManagement', {
    url: '/MedicationManagement',
    templateUrl: 'app/modules/MedicationManagement/views/dashboards.html',
    controller: 'MedicationManagementCtrl'
  });

  $stateProvider.state('Satisfaction', {
    url: '/Satisfaction',
    templateUrl: 'app/modules/Satisfaction/views/dashboards.html',
    controller: 'SatisfactionCtrl'
  });
}]);

// http://stackoverflow.com/a/14968873/2552551
var underscore = angular.module('underscore', []);
underscore.factory('underscore', ['$window', function() {
  return $window._; // assumes underscore has already been loaded on the page
}]);