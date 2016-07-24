'Use strict';

app.controller('VaccinationCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function VaccinationCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();
    $scope.buildings = kpi.buildings();
    $scope.departments = kpi.departments();
    $scope.categories = kpi.categories();
    $scope.save = function save () {
    };
  }
]);