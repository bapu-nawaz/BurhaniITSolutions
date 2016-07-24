'Use strict';

app.controller('PatientScreenedCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function PatientScreenedCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.PIS = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.PIS.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.PIS.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.PIS).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.PIS;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);