'Use strict';

app.controller('baselineGcsCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function baselineGcsCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    var countfields = 4;
    $scope.baselineGcs = {};        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.baselineGcs).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.baselineGcs;
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