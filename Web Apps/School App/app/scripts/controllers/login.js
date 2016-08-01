'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
app.controller('LoginCtrl', ['$scope', '$location', 'Api', 'config',
    function($scope, $location, API, C) {

  	$scope.lg = {"email": "", "pass": "", "status": ""};

    $scope.submit = function() {

    	console.log("Email: ",$scope.lg);
    	if($scope.loginForm.$invalid){
    		return true;
    	}
      var url = C.loginURL+$scope.lg.email;
      API.get(url)
         .then(function success (user) {
            if (user.id != 0) {
              if( user.pass != $scope.lg.pass ){
                $scope.lg.status = "Error: Wrong password";
                return true;
              }
              console.log("Correct Login: ", user);
            	$location.path('/dashboard/'+user.id+'/overview');             
            } else {
              $scope.lg.status = "Error: "+user.status;
            }
         }, function fail (reason) {
            $scope.lg.status = (reason==null) ? "Unknown Error" : reason;
      });
      return false;
    }

  }]);
