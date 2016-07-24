'Use strict';

app.controller('HandHygeineCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function HandHygeineCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.categories = kpi.categories();
    $scope.save = function save () {
    };

  }
]);