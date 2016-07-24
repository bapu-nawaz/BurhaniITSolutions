'Use strict';

app.controller('ArdsMortalityCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ArdsMortalityCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
    
    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 5;
    $scope.ardsMortality = {};
    
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.ardsMortality.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.ardsMortality).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.ardsMortality;
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