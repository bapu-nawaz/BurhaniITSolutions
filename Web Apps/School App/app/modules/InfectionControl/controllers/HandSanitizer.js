'Use strict';

app.controller('HandSanitizerCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function HandSanitizerCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.save = function save () {
    };
  }
]);