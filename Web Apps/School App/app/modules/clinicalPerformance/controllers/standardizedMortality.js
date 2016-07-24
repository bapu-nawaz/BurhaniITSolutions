'Use strict';

app.controller('StandardizedMortalityCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function StandardizedMortalityCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 7;
    $scope.standardizedMortality = {};
    
    $scope.buildings = kpi.buildings();        
    
    /**
    * save users
    * @function save
    * @returns {void}
    */

    $scope.save = function save () {
      if ($scope.standardizedMortality.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.standardizedMortality).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.standardizedMortality;
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