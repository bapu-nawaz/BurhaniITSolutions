'Use strict';

app.controller('PatientsProperlyIdentifiedCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function PatientsProperlyIdentifiedCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.patientsProperlyIdentified = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.patientsProperlyIdentified.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.patientsProperlyIdentified.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.patientsProperlyIdentified).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.patientsProperlyIdentified;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);