'Use strict';

app.controller('VAPCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi',
  function VAPCtrl ($scope, $http, $stateParams, $location, Kpi) {

    var kpi = new Kpi();
    $scope.buildings = kpi.buildings();
    $scope.save = function save () {
    };

  }
]);