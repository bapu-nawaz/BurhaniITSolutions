'Use strict';

app.controller('UnexpectedMortalityICUCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function UnexpectedMortalityICUCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 8;
    $scope.unexpectedMortalityICU = {};
    
    $scope.buildings = kpi.buildings();        
    
    /**
    * save users
    * @function save
    * @returns {void}
    */

    $scope.save = function save () {
      if ($scope.unexpectedMortalityICU.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.unexpectedMortalityICU).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.unexpectedMortalityICU;
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