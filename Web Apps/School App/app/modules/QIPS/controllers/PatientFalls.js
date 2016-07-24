'Use strict';

app.controller('PatientFallsCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function PatientFallsCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.patientFalls = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        

    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.patientFalls.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.patientFalls.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.patientFalls).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.patientFalls;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);