'Use strict';

app.controller('therapeuticAnticoagulationBleedingCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function therapeuticAnticoagulationBleedingCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.AnticoagulationBleeding = {};
           
    /**
    * save users
    * @function save
    * @returns {void}
    */
    
    $scope.save = function save () {
      if (Object.keys($scope.AnticoagulationBleeding).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.AnticoagulationBleeding;
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