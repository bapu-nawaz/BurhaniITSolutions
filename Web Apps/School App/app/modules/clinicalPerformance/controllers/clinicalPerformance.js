'Use strict';

app.controller('ClinicalPerformanceCtrl', ['$scope', '$http', '$stateParams', '$location', '$anchorScroll',
  function ClinicalPerformanceCtrl($scope, $http, $stateParams, $location, $anchorScroll) {

    $scope.diseases = [];
    /**
    * Change View
    * @function gotoAnchor
    *
    * @param {number} id It is use to change the view.
    *
    * @returns {undefined} return nothing.
    **/  
    $scope.gotoAnchor = function gotoAnchor (id) {

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