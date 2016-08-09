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

	    /* VARIABLE DECLARATIONS */
	    $scope.$state = $state;
	    $scope.childName = '';
	    $scope.children = new Array();
	    $scope.userData = userData;
    	$scope.error = {"status": false, "message": ""};
    	$scope.defaults = { 
    		"modalClosed": true, 
    		"activityTitle": "", 
    		"date":  {
    			"start": new Date(),
    			"end": new Date()
    		},
    		"subject": -1,
    		"options": [
    			{"id": 0, "name": "Activity Report", "icon": "glyphicon-check"},
    			{"id": 1, "name": "Fees", "icon": "glyphicon-list-alt"},
    			{"id": 2, "name": "Attendance Details", "icon": "glyphicon-calendar"},
    			{"id": 2, "name": "Home Work", "icon": "glyphicon-education"}
    		],
    		"feesCounter": -1
    	};

		/* FUNCTION DEFINITIONS */
	    $scope.fetchChildren = function () {
	    	if(childrenData.id != 0)
		    	$scope.children = childrenData;
		    else {
		    	$scope.error.message = childrenData.status;
		    	$scope.error.status = true;
		    }
	    	console.log("Children:",$scope.children);
	    }

	    $scope.childClicked = function(param) {
	    	$scope.defaults.modalClosed = false;
	    	$scope.defaults.activityTitle = param;
	    }

	    $scope.checkDetails = function() {
	    	console.log("User:",$scope.userData);
	    	// if ($scope.userData.status == null) {
      //       	$location.path('/overview');             
	    	// }
	    }

	    $scope.closeModal = function () {
	    	$scope.defaults.modalClosed = true;
	    	$scope.defaults.activityTitle = "";
	    	$scope.defaults.subject = -1;
	    	$scope.defaults.date.start = new Date();
	    }

	    $scope.getTimes = function (x) {
	    	return new Array(x);
	    }

	    $scope.checkDetails();
	    $scope.fetchChildren();


	    $scope.subjects = [
		    {"id":0, "name": "Maths", "teacher": "Mathematics Teacher"},
		    {"id":1, "name": "Islamiat", "teacher": "Religion Teacher"},
		    {"id":2, "name": "Urdu", "teacher": "Language Teacher"},
		    {"id":3, "name": "English", "teacher": "Language Teacher"},
		    {"id":4, "name": "Science", "teacher": "Science Teacher"}
	    ];

	    $scope.weekDay = [
	    	"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	    ];
	    /* DIALOG */

	}
]);