'Use strict';

app.controller('SelfExtubationCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function SelfExtubationCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    var kpi = new Kpi();
    var countfields = 5;
    $scope.selfExtubation = {};
   
    $scope.buildings = kpi.buildings();        
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if ($scope.selfExtubation.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.selfExtubation).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.selfExtubation;
      data.table = 'tableName';
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);