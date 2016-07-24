'Use strict';

app.controller('ROATCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL', 
  function ROATCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
    var countfields = 5;
    $scope.RAT = {};
      
    $scope.buildings = kpi.buildings();  
    
    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 
    $scope.save = function save () {
      if ($scope.RAT.buildings === undefined){
        alert('Please Fill Out The departments');
        return;
      }
      if (Object.keys($scope.RAT).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.RAT;
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