'Use strict';

app.controller('ActualAndBudgetedPatientDaysCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function ActualAndBudgetedPatientDaysCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.PatientDays = {};

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/
    $scope.save = function save () {
      if (Object.keys($scope.PatientDays).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.PatientDays;
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
