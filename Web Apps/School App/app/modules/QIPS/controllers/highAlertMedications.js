'Use strict';

app.controller('HighAlertMedicationsCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function HighAlertMedicationsCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.highAlertMedications = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.highAlertMedications.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.highAlertMedications.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.highAlertMedications).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.highAlertMedications;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);