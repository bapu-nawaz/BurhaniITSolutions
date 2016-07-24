'Use strict';

app.controller('SuccessfulCardioPulmonaryResuscitationCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function SuccessfulCardioPulmonaryResuscitationCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 3;
    $scope.pulmonaryResuscitation = {};
           
    /**
    * save users
    * @function save
    * @returns {void}
    */
    $scope.save = function save () {
      if (Object.keys($scope.pulmonaryResuscitation).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.pulmonaryResuscitation;
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