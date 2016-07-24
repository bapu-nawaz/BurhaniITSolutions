'Use strict';

app.controller('RateAdverseEventsCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function RateAdverseEventsCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 5;
    $scope.RAE = {};
    
    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.RAE.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.RAE.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.RAE).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.RAE;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);