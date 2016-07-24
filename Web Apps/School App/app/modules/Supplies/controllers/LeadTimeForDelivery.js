'Use strict';

app.controller('LeadTimeForDeliveryCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL', 
  function LeadTimeForDeliveryCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    var kpi = new Kpi();
    $scope.items = kpi.items();
    $scope.medications = kpi.medications();

    $scope.save = function save () {
    if ($scope.leadTimeForDelivery.items !== undefined && $scope.leadTimeForDelivery.medication !== undefined){
          var data = {};
          data.fields = $scope.leadTimeForDelivery;
          data.table = 'tableName';
          Api.post(API_URL, data).then(function success (response){

          }, function fail (response){

          });
    }
    };
  }
]);