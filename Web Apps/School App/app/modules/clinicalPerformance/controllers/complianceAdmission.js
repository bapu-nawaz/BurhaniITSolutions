'Use strict';

app.controller('ComplianceAdmissionCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ComplianceAdmissionCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {
    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.complianceAddmission = {};
    
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.complianceAddmission).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.complianceAddmission;
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