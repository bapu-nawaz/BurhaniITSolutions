'Use strict';

app.controller('BloodCultureContaminationRateCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function BloodCultureContaminationRateCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    var kpi = new Kpi();
    var countfields = 4;
    $scope.bloodCultureContaminationRate = {};

    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.bloodCultureContaminationRate.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.bloodCultureContaminationRate).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.bloodCultureContaminationRate;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);