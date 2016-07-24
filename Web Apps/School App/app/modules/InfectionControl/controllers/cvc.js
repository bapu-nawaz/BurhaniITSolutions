'Use strict';

app.controller('CVCCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function CVCCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();
    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.save = function save () {
    };
  }
]);