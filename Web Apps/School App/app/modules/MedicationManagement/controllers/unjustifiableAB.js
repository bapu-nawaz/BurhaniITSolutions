'Use strict';
 /**
   *  Name: unjustifiableABCtrl
   *  Purpose: initialize variables for first use
   *  @returns {Object} Kpi Object
   */

app.controller('unjustifiableABCtrl', ['$scope', '$http', '$stateParams', '$location', 'Api', 'API_URL',
        function unjustifiableABCtrl ($scope, $http, $stateParams, $location, Api, API_URL) {
          $scope.save = function save () {
            var data = {};
            data.fields = $scope.drugReaction;
            data.table = 'tableName';
            Api.post(API_URL, data).then(function success (response){

            }, function fail (response){

            });
          };
        }
]);