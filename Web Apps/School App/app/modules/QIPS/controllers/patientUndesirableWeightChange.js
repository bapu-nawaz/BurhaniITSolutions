'Use strict';

app.controller('PatientUndesirableWeightChangeCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL',
  function PatientUndesirableWeightChangeCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 4;
    $scope.patientUndesirableWeightChange = {};        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.patientUndesirableWeightChange).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.patientUndesirableWeightChange;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);