'Use strict';

app.controller('CLABSICtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function CLABSICtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.save = function save () {
    };
  }
]);