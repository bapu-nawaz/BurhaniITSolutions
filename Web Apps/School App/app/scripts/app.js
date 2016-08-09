'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var app = angular.module('yapp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngMaterial'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard/:id',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl',
          resolve: {
            userDetails: ['$stateParams','config','Api',
              function($stateParams, C, API){
                return API.get(C.getUser($stateParams.id));
              }
            ],
            childrenData: ['$stateParams','config','Api',
              function($stateParams, C, API){
                return API.get(C.getChildren($stateParams.id));
              }
            ]
          }
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          })

  });
