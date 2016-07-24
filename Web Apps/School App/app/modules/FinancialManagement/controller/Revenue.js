'Use strict';

app.controller('REVENUECtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function REVENUECtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    $scope.Revenue = {};
    $scope.contracts = kpi.contracts();
    $scope.levelOfCare = kpi.levelOfCare();
    var countfields = 4;
    
    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if ($scope.Revenue.contracts === undefined){
        alert('Please Fill Out The Contracts');
        return;
      }
      if ($scope.Revenue.levelOfCare === undefined){
        alert('Please Out The levelOfCare');
        return;
      }
      if (Object.keys($scope.Revenue).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.Revenue;
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