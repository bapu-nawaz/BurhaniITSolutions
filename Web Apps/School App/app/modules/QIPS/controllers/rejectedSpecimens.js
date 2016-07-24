'Use strict';

app.controller('rejectedSpecimensCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function rejectedSpecimensCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {

    var kpi = new Kpi();
    var countfields = 4;
    $scope.rejectedSpecimens = {};
    
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.rejectedSpecimens.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.rejectedSpecimens).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.rejectedSpecimens;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);