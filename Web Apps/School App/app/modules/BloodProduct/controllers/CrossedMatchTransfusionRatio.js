'Use strict';

app.controller('CTRCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function CTRCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    var countfields = 5;
    $scope.CMT = {};

    $scope.departments = kpi.departments();
    $scope.buildings = kpi.buildings();        

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 
    $scope.save = function save () {
      if ($scope.CMT.departments === undefined){
        alert('Please Fill Out The Departments');
        return;
      }
      if ($scope.CMT.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.CMT).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.CMT;
      data.table = 'tableName';
      
      /**
      * Post form data to save 
      */
      Api.post(API_URL, data).then(function success (response){

      }, function fail (response){

      });
    };
  }
]);
