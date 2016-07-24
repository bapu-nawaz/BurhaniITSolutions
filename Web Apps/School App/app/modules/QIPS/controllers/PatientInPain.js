'Use strict';

app.controller('PatientInPainCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
	function PatientInPainCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

  var kpi = new Kpi();
  var countfields = 5;
  $scope.PIP = {};
    
  $scope.departments = kpi.departments();
  $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.PIP.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.PIP.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.PIP).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.PIP;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
}
]);