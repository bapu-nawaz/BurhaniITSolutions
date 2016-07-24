'Use strict';
app.controller('WBUCtrl', ['$scope', '$http', '$stateParams', '$location', 'Kpi', 'Api', 'API_URL',
  function WBUCtrl ($scope, $http, $stateParams, $location, Kpi, Api, API_URL) {
    
    /**
    * Object of a Kpi
    */
    var kpi = new Kpi();
      
    $scope.buildings = kpi.buildings();
    var countfields = 5;
    $scope.WBU = {};  

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 
    $scope.save = function save () {
      if ($scope.WBU.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.WBU).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.WBU;
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