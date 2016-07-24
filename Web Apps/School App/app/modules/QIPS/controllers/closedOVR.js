'Use strict';

app.controller('ClosedOVRCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function ClosedOVRCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    var kpi = new Kpi();
    var countfields = 5;
    $scope.closedOVR = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.closedOVR.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.closedOVR).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.closedOVR;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);