'Use strict';

app.controller('UCUCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function UCUCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();
    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.save = function save () {
    };
  }
]);