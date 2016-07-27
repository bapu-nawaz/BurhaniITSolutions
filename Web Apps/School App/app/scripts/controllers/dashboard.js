'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
app.controller('DashboardCtrl', ['$scope', '$state', 'Children', 
	function($scope, $state, Children) {

	    /* VARIABLE DECLARATIONS */
	    $scope.$state = $state;
	    $scope.childName = '';
	    $scope.children = new Array();

		/* FUNCTION DEFINITIONS */
	    $scope.fetchChildren = function () {
	    	$scope.children.push(new Children("Asif Ali Khan"));
	    	$scope.children.push(new Children("Zahid Ali Khan"));
	    	$scope.children.push(new Children("Kulsoom Ali Khan"));
	    }

	    $scope.childClicked = function(param) {
	    	alert("You selected "+param);
	    }

	    $scope.fetchChildren();
	}
]);