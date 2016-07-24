'Use strict';

app.controller('satisfactoryCompetencyAssessmentCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function satisfactoryCompetencyAssessmentCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.satisfactoryCompetencyAssessment = {};
    $scope.assessments = kpi.assessments();
    $scope.categories = kpi.categories();

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/

    $scope.save = function save () {
      if ($scope.satisfactoryCompetencyAssessment.assessments === undefined){
        alert('Please Fill out The Assessments');
        return;
      } 
      if ($scope.satisfactoryCompetencyAssessment.categories === undefined){
        alert('Please Fill out The Categories');
        return;
      }  
      if (Object.keys($scope.satisfactoryCompetencyAssessment).length !== countfields){
        return;
      }
      var data = {};
      data.fields = $scope.satisfactoryCompetencyAssessment;
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