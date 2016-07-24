'Use strict';

app.controller('heparineThrompothytopeniaCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function heparineThrompothytopeniaCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.heparineThrompothytopenia = {};
           
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.heparineThrompothytopenia).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.heparineThrompothytopenia;
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