'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
app.controller('DashboardCtrl', ['$scope', '$state', '$location', 'Children', 'userDetails', 'childrenData',
	function($scope, $state, $location, Children, userData, childrenData) {

		console.log("State:",$state, $state.reload('overview') );
	    /* VARIABLE DECLARATIONS */
	    $scope.$state = $state;
	    $scope.childName = '';
	    $scope.children = new Array();
	    $scope.userData = userData;
    	$scope.error = {"status": false, "message": ""};

		/* FUNCTION DEFINITIONS */
	    $scope.fetchChildren = function () {
	    	// $scope.children.push(new Children("Asif Ali Khan"));
	    	// $scope.children.push(new Children("Zahid Ali Khan"));
	    	// $scope.children.push(new Children("Kulsoom Ali Khan"));
	    	if(childrenData.id != 0)
		    	$scope.children = childrenData;
		    else {
		    	$scope.error.message = childrenData.status;
		    	$scope.error.status = true;
		    }
	    	console.log("Children:",$scope.children);
	    }

	    $scope.childClicked = function(param) {
	    	alert("You selected "+param);
	    }

	    $scope.checkDetails = function() {
	    	console.log("User:",$scope.userData);
	    	// if ($scope.userData.status == null) {
      //       	$location.path('/overview');             
	    	// }
	    }

	    $scope.checkDetails();
	    $scope.fetchChildren();
	}
]);