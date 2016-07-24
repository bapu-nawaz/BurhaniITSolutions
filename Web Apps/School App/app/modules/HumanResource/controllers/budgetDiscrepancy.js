'Use strict';

app.controller('budgetDiscrepancyCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function budgetDiscrepancyCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 6;
    $scope.budgetDiscrepancy = {};
    $scope.departments = kpi.departments();
    $scope.types = kpi.types();
    $scope.categories = kpi.categories();

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 

    $scope.save = function save () {
      if ($scope.budgetDiscrepancy.departments === undefined){
        alert('Please Fill The Departments');
        return;
      } 
      if ($scope.budgetDiscrepancy.types === undefined){
        alert('Please Fill The Types');
        return;
      }  
      if ($scope.budgetDiscrepancy.categories === undefined){
        alert('Please Fill The Categories');
        return;
      }  
      if (Object.keys($scope.budgetDiscrepancy).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.budgetDiscrepancy;
      data.table = 'tableName';
      
      /**
      * Post form data to save 
      */

      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);