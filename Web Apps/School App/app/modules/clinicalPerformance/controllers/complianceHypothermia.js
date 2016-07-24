'Use strict';

app.controller('ComplianceHypothermiaCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ComplianceHypothermiaCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
   
    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.complianceHypothermia = {};        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.complianceHypothermia).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.complianceHypothermia;
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