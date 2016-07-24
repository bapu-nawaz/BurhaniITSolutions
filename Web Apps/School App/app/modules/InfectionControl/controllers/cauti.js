'Use strict';

app.controller('CAUTICtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function CAUTICtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.save = function save () {
    };
  }
]);