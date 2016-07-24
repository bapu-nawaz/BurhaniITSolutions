'Use strict';

app.controller('NETCASHFLOWCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function NETCASHFLOWCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.NCF = {};
    
    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.NCF).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.NCF;
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