'Use strict';

app.controller('ComplianceSepsisCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ComplianceSepsisCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 5;
    $scope.complianceSepsis = {};
    
    $scope.buildings = kpi.buildings();        
    
    /**
    * save users
    * @function save
    * @returns {void}
    */

    $scope.save = function save () {
      if ($scope.complianceSepsis.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.complianceSepsis).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.complianceSepsis;
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