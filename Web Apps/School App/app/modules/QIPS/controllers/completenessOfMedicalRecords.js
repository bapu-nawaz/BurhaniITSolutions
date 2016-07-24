'Use strict';

app.controller('CompletenessOfMedicalRecordsCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function CompletenessOfMedicalRecordsCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 4;
    $scope.completeRecords = {};
    
    $scope.buildings = kpi.buildings();        
    $scope.departments = kpi.departments();  
    $scope.categories = kpi.categories();  
    /**
    * save users
    * @function save
    * @returns {void}
    */        
    $scope.save = function save () {
      if ($scope.completeRecords.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.completeRecords.categories === undefined){
        alert('Please Fill Out The Categories');
        return;
      }      
      if ($scope.completeRecords.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.completeRecords).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.completeRecords;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);