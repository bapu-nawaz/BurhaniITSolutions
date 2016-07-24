'Use strict';

app.controller('nosocomialClosteriumCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function nosocomialClosteriumCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 5;
    $scope.nosocomialClosterium = {};
    
    $scope.buildings = kpi.buildings();        
    
    /**
    * save users
    * @function save
    * @returns {void}
    */

    $scope.save = function save () {
      if ($scope.nosocomialClosterium.buildings === undefined){
        alert('Please Fill Out The Buildings');
        return;
      }
      if (Object.keys($scope.nosocomialClosterium).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.nosocomialClosterium;
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