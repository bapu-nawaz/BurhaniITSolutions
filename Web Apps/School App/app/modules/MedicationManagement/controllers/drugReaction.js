'Use strict';

app.controller('drugReactionCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function drugReactionCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    var kpi = new Kpi();
    $scope.drugReaction = {};
    $scope.buildings = kpi.buildings();
    $scope.categories = kpi.categories();
    $scope.outcomes = kpi.outcomes();
    $scope.errorStages = kpi.errorStages();
    
    $scope.save = function save () {
      if ($scope.drugReaction.buildings !== undefined && $scope.drugReaction.categories !== undefined && $scope.drugReaction.outcomes !== undefined && $scope.drugReaction.errorStage !== undefined) {
        var data = {};
        data.fields = $scope.drugReaction;
        data.table = 'tableName';
        Api.post(API_URL, data).then(function success (response){

        }, function fail (response){

        });
      }
    };

  }
]);