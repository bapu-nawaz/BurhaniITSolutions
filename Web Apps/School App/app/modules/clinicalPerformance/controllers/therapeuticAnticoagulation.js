'Use strict';

app.controller('therapeuticAnticoagulationCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function therapeuticAnticoagulationCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */
    
    var kpi = new Kpi();
    var countfields = 4;
    $scope.therapeuticAnticoagulation = {};
           
    /**
    * save users
    * @function save
    * @returns {void}
    */

    $scope.save = function save () {
      if (Object.keys($scope.therapeuticAnticoagulation).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.therapeuticAnticoagulation;
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