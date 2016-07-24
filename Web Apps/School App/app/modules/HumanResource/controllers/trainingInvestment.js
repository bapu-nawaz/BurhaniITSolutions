'Use strict';

app.controller('trainingInvestmentCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function trainingInvestmentCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 5;
    $scope.trainingInvestment = {};

    $scope.buildings = kpi.buildings();
    $scope.types = kpi.types();
    $scope.categories = kpi.categories();

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    
    $scope.save = function save () {
      if ($scope.trainingInvestment.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      } 
      if ($scope.trainingInvestment.types === undefined){
        alert('Please Fill out The Types');
        return;
      } 
      if ($scope.trainingInvestment.categories === undefined){
        alert('Please Fill Out The Categories');
        return;
      } 
      if (Object.keys($scope.trainingInvestment).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.trainingInvestment;
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