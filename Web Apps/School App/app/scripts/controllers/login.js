'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

  	$scope.lg = {"email": "", "pass": ""};

    $scope.submit = function() {

    	console.log("Email: ",$scope.lg);
    	if($scope.loginForm.$invalid){
    		return true;
    	}

      	$location.path('/dashboard');
      	return false;
    }

  });
