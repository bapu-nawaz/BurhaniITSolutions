'Use strict';

app.controller('HOProfitBedCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function HOProfitBedCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.HOP = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.HOP).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.HOP;
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