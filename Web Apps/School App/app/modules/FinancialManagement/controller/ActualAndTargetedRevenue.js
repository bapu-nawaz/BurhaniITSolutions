'Use strict';

app.controller('ActualAndTargetedRevenueCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ActualAndTargetedRevenueCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    $scope.ActualRevenue = {};
    $scope.contracts = kpi.contracts();
    $scope.levelOfCare = kpi.levelOfCare();
    var countfields = 5;
    
    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if ($scope.ActualRevenue.contracts === undefined){
        alert('Please Fill Out The Contracts');
        return;
      }
      if ($scope.ActualRevenue.levelOfCare === undefined){
        alert('Please Out The levelOfCare');
        return;
      }
      if (Object.keys($scope.ActualRevenue).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.ActualRevenue;
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