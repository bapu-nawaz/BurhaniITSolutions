'Use strict';

app.controller('CostPerDischargeCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function CostPerDischargeCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.CostPerDischarge = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.CostPerDischarge).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.CostPerDischarge;
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