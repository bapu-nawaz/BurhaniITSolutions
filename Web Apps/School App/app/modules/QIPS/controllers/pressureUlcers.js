'Use strict';

app.controller('PressureUlcersCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function PressureUlcersCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.pressureUlcers = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.pressureUlcers.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.pressureUlcers.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.pressureUlcers).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.pressureUlcers;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);