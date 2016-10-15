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

      $scope.submitted = true;
      $scope.forgotPasswordClick = false;
    	printText("LOCAL-USER:",$scope.lg);
    	if($scope.loginForm.$invalid){
    		return true;
    	}
      var url = C.loginURL+$scope.lg.email;
      API.get(url)
         .then(function success (user) {
              printText("DB-USER:",user);
            if (user.ID != 0) {
              if( user.PASSWORD != $scope.lg.pass ){
                $scope.lg.status = "Error: Wrong password";
                return true;
              }
              printText("Correct Login: ", user);
            	$location.path('/dashboard/'+user.ID+'/overview');             
            } else {
              printText("incorrect Login: ", user);
              $scope.lg.status = "Error: "+user.status;
            }
         }, function fail (reason) {
            $scope.lg.status = (reason==null) ? "Unknown Error" : reason;
      });
      return false;
    }

    var printText = function (tag, text) {
      console.log("INFO:",tag,text);
    }

    $scope.forgotPassword = function() {
      $scope.submitted = true;
      $scope.forgotPasswordClick = true;
      if( $scope.loginForm.loginEmail.$invalid )
        return true;
      API.get(C.forgotPassword($scope.lg.email))
         .then(function(response){
            $scope.lg.status = response.message;
         });
    }

  }]);
