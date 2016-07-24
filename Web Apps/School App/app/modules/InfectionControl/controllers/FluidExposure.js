'Use strict';

app.controller('FluidExposureCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function FluidExposureCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.categories = kpi.categories();
    $scope.save = function save () {
    };

  }
]);