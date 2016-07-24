'Use strict';

app.controller('EmployeeSatisfactionCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function EmployeeSatisfactionCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 6;
    $scope.employeeSatisfaction = {};

    $scope.items = kpi.items();
    $scope.types = kpi.types();
    $scope.categories = kpi.categories();

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    
    $scope.save = function save () {
      if ($scope.employeeSatisfaction.items === undefined){
        alert('Please Select The Item');
        return;
      } 
      if ($scope.employeeSatisfaction.types === undefined){
        alert('Please Select The Type');
        return;
      }   
      if ($scope.employeeSatisfaction.categories === undefined){
        alert('Please Select The Categories');
        return;
      } 
      if (Object.keys($scope.employeeSatisfaction).length !== countfields ){
        return;
      }
      var data = {};
      data.fields = $scope.employeeSatisfaction;
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