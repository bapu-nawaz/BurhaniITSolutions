'Use strict';

app.controller('CompletedCompetencyAssessmentCtrl', ['$scope', 'Kpi', '$http', '$stateParams', '$location', 'Api', 'API_URL',
  function CompletedCompetencyAssessmentCtrl ($scope, Kpi, $http, $stateParams, $location, Api, API_URL) {

    /**
    * Object of a Kpi
    */

    var kpi = new Kpi();
    var countfields = 4;
    $scope.completedCompetencyAssessment = {};

    $scope.assessments = kpi.assessments();
    $scope.categories = kpi.categories();

    /**
    * Save data
    * @function save
    *
    * @returns {undefined} return nothing.
    **/ 

    $scope.save = function save () {
      if ($scope.completedCompetencyAssessment.assessment === undefined){
        alert('Please Fill The Assessment');
        return;
      } 
      if ($scope.completedCompetencyAssessment.categories === undefined){
        alert('Please Fill The Categories');
        return;
      } 
      if (Object.keys($scope.completedCompetencyAssessment).length !== countfields){
        return;
      }  
      var data = {};
      data.fields = $scope.completedCompetencyAssessment;
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