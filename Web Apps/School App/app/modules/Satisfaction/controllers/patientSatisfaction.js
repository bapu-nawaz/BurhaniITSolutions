'Use strict';

app.controller('PatientSatisfactionCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL',
  function PatientSatisfactionCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    $scope.kpi = new Kpi();
    var countfields = 6;
    $scope.patientSatisfaction = {};


    $scope.save = function save(tableName){
      
      if ( Object.keys($scope.patientSatisfaction).length === countfields ){
        var data = {};
        data.fields = $scope.patientSatisfaction;
        data.table = tableName;

        Api.post(API_URL, data).then(function success (response){
          alert('Success', response);
        }, function fail (response){
          console.log('fail', response);
        });
      }
    };

  }
]);