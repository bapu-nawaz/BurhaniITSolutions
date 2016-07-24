'Use strict';

app.controller('EBITDACtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function EBITDACtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.EBITDA = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.EBITDA).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.EBITDA;
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