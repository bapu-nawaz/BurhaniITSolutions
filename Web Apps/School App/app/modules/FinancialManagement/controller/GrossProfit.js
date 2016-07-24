'Use strict';

app.controller('GROSSPROFITCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function GROSSPROFITCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {
    
    var countfields = 3;
    $scope.GrossProfit = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.GrossProfit).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.GrossProfit;
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