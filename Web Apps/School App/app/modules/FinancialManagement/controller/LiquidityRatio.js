'Use strict';

app.controller('LiquidityRatioCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function LiquidityRatioCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.LR = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.LR).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.LR;
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