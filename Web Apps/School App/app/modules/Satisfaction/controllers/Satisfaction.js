'Use strict';

app.controller('SatisfactionCtrl', ['$scope', '$http', '$stateParams', '$location', '$anchorScroll',
    function SatisfactionCtrl ($scope, $http, $stateParams, $location, $anchorScroll) {

      $scope.diseases = [];
       
      $scope.gotoAnchor = function gotoAnchor(id) {

        if ($location.hash() !== id) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(id);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
      };

    }
]);