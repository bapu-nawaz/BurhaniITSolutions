'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
app.controller('DashboardCtrl', ['$scope', '$state', '$location', 'Children', 'userDetails', 'config', 'Api',
	function($scope, $state, $location, Children, userData, C, $api) {

	    /* VARIABLE DECLARATIONS */
	    $scope.$state = $state;
	    $scope.childName = '';
	    $scope.children = new Children(userData.EMAIL);
	    $scope.userData = userData;
    	$scope.error = {"status": false, "message": ""};
        //$scope.attendance = P; 
    	$scope.defaults = { 
    		"modalClosed": true, 
    		"activityTitle": "", 
    		"date":  {
    			"start": new Date(),
    			"end": new Date(),
    			"selectedDate": null
    		},
    		"subject": -1,
    		"options": [
    			{"id": 0, "name": "Activity Report", "icon": "glyphicon-check"},
    			{"id": 1, "name": "Fees", "icon": "glyphicon-list-alt"},
    			{"id": 2, "name": "Attendance Details", "icon": "glyphicon-calendar"},
    			{"id": 2, "name": "Home Work", "icon": "glyphicon-education"}
    		],
    		"weekDay": [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    		"months": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    		"feesCounter": -1,
    		"dialogContentClicked": false,
    		"isLoading": false,
    		"companyCode": 1,
    		"branchCode": 1
    	};

		/* FUNCTION DEFINITIONS */
		var printText = function (tag, text) {
			console.log("Dashboard:",tag,text);
		}

	    $scope.fetchChildren = function () {
	    	$api.get(C.getChildren(userData.EMAIL))
	    	.then(function (response) {
	    		$scope.children.setData(response);
	    		if (response.ID == 0) {
	    			$scope.error.status = true;
	    			$scope.error.message = response.Message;
	    		}
	    	});
	    }

	    $scope.childClicked = function(param) {
	    	printText("Child Clicked for",param);
	    	$scope.defaults.modalClosed = false;
	    	$scope.defaults.activityTitle = param;
	    	$scope.defaults.date.selectedDate = $scope.defaults.date.start;
	    }

	    $scope.checkDetails = function() {
	    	printText("User:",$scope.userData);
	    	// $scope.defaults.companyCode = $scope.userData.COCODE;
	    	// $scope.defaults.branchCode = $scope.userData.BRCOD;
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

	    $scope.closeDialog = function(param) {
	    	if( !param )
	    		$scope.defaults.dialogContentClicked = true;
	    	else if( $scope.defaults.dialogContentClicked ) 
	    		$scope.defaults.dialogContentClicked = false;
	    	else
	    		$scope.closeModal();
	    }

	    $scope.isHoliday = function(param) {
	    	var date = ($scope.defaults.date.start.getDay() + param)%7;
	    	var day = $scope.defaults.weekDay[date];
	    	if ( day == "Sunday" || day == "Saturday" )
	    		return true;
	    	return false;
	    }


	    /* Start Programming here */
    	$scope.checkDetails();
	    $scope.fetchChildren();

	    $scope.toCamelCase = function(str) {
	    	if( str == null )
	    		return "";
	    	if( str.split(" ").length > 1 ) {
	    		return constructedCamelCase(str.split(" "));
	    	}
	    	str = str.toLowerCase();
		  	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		    	return index != 0 ? letter.toLowerCase() : letter.toUpperCase();
		  	}).replace(/\s+/g, '');
	    }
	    var constructedCamelCase = function(array) {
	    	var leftOverArray = [];
	    	for( var arrayCounter=1; arrayCounter<array.length; arrayCounter++ )
	    		leftOverArray.push(array[arrayCounter]);
	    	if( leftOverArray.length>0 )
		    	return $scope.toCamelCase(array[0]) + " " + constructedCamelCase(leftOverArray);
		    return $scope.toCamelCase(array[0]);
	    }

	    var data = $scope.children;
	    printText("CHILDREN",data[0]);
	    // printText("CHILDREN",data.$$state);

	    $scope.courseDetailChanged = function () {
	    	$scope.defaults.isLoading = true;
	    	setTimeout(function(){ $scope.$apply( function() {$scope.defaults.isLoading = false;}); }, 1000);
	    }

	    $scope.printChild = function() {
	    	printText("Click",$scope.children);
	    	printText("Click",$scope.children.data);
	    	printText("Click",$scope.children.data[0]);
	    	printText("Click",$scope.children.data[0][0]);
	    }


       //$scope.feeDetails = function ()



	    $scope.attendanceStatus = function (index) {
	    	// {info: isHoliday($index), success:  $index == 0, danger: $index == 1, warning: $index == 2}
	    	if ( $scope.isHoliday(index) )
	    		return "info";

	    	index = $scope.defaults.date.start.getDate()+index;
           
 

	    	var today = $scope.dayName(index);
	    	var attendance = "unknown";
	    	if( $scope.children.data[0].Attendance[0] != null )
		    	attendance = $scope.children.data[0].Attendance[0][today];

	    	printText("LOOP: "+today, attendance);
	    		  
	    	   	switch(attendance) {

	    		case "P":
	    		case "p":
	    			return "success";

	    		case "A": 
	    		case "a":
	    			return "danger";

	    		case "H":
	    		case "h":
	    			return "warning";

	    		default: 
	    			return "noColor";  

	    		}
      
	        }

	        $scope.dayName = function(index) {
	        	return "DAY"+((index<10)?("0"+index):index);
	        }

	    $scope.defaults.date.start.setDate(1);

	    $scope.onDateChangedListener = function() {
	    	var selectedDate = formattedDate($scope.defaults.date.start);
	    	switch($scope.defaults.activityTitle) {
	    		case "Activity Report" :
	    			$scope.defaults.isLoading = true;
	    			$api.get(C.getActivityDetail(selectedDate,$scope.childName.ID))
	    				.then(function(response){
	    					// onSuccess, change variables as required ()
	    					$scope.childName.ActivityDetails = response;
	    					$scope.defaults.isLoading = false;
	    				});
	    			break;
	    		case "Home Work" :
	    			$scope.defaults.isLoading = true;
	    			$api.get(C.getHomeWork(selectedDate,$scope.childName.ID))
	    				.then(function(response){
	    					// onSuccess, change variables as required ()
	    					$scope.childName.DailyDiary = response;
	    					$scope.defaults.isLoading = false;
	    				});
	    			break;
	    		case "Fees" :
	    			break;
	    		case "Attendance Details" :
	    			if( $scope.defaults.date.selectedDate.getMonth() != $scope.defaults.date.start.getMonth() ) {
	    				$scope.defaults.isLoading = true;
	    				$scope.defaults.date.start.setDate(1);
	    				selectedDate = formattedDate($scope.defaults.date.start);
	    				$api.get(C.getAttendanceDetail(selectedDate,$scope.childName.ID))
	    				.then(function(response){
	    					// onSuccess, change variables as required ()
	    					$scope.children.data[0].Attendance = response;
	    					$scope.defaults.isLoading = false;
	    				});
	    			}
	    			break;
	    		default:
	    	}
	    	$scope.defaults.date.selectedDate = $scope.defaults.date.start;
	    }

	    var formattedDate = function(param) {
	    	var day = ("0" + param.getDate()).slice(-2);
	    	var month = $scope.defaults.months[param.getMonth()];
	    	var year = param.getFullYear();

	    	return day+"-"+month+"-"+year;
	    }

	    $scope.childSelected = function(param) {
	    	$scope.childName = param;
	    }

	    $scope.sendApplication = function() {
	    	$scope.defaults.application['student'] = $scope.childName.ID;

	    	$api.get(C.sendApplication($scope.defaults.application))
	    	.then(function(response){
	    		$scope.closeModal();
	    		$scope.childName.ApplicationDetails.push(response);
	    	});
	    	
	    }
	}
]);