'Use strict';

app.controller('UBUCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function UBUCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    var countfields = 5;
    $scope.UBU = {};
      
    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();     

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 
    $scope.save = function save () {
      if ($scope.UBU.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if ($scope.UBU.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if (Object.keys($scope.UBU).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.UBU;
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