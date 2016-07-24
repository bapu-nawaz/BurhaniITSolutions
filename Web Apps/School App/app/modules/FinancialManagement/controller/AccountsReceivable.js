'Use strict';

app.controller('AccountsReceivableCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function AccountsReceivableCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {

    var countfields = 3;
    $scope.DaysInAccountsReceivable = {};
    
    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 
    $scope.save = function save () {
      if (Object.keys($scope.DaysInAccountsReceivable).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.DaysInAccountsReceivable;
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

