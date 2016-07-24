'Use strict';

app.controller('InfectionControlCtrl', ['$scope', '$http', '$stateParams', '$location', '$anchorScroll',
		function InfectionControlCtrl ($scope, $http, $stateParams, $location, $anchorScroll) {

			$scope.diseases = [];
			 
			$scope.gotoAnchor = function(id) {

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