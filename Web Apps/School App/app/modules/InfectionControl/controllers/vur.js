'Use strict';

app.controller('VURCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function VURCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();

    $scope.buildings = kpi.buildings();
    $scope.save = function save () {
    };
  }
]);