'Use strict';

app.controller('ComplianceVerbalOrderCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function ComplianceVerbalOrderCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.complianceVerbalOrder = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.complianceVerbalOrder.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.complianceVerbalOrder.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.complianceVerbalOrder).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.complianceVerbalOrder;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);