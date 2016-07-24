app.factory('Kpi', [function KpiModel(){

  /**
   *  Name: Kpi (Constructor)
   *  Purpose: initialize variables for first use
   *  @returns {Object} Kpi Object
   */
  function Kpi() {
  };  

  /**
   * buildings name list
   * @returns {Array} buildings Array
   */
  Kpi.prototype.buildings = function buildings() {
    return new Array('B2', 'B3', 'B4', 'B10', 'B11', 'B13');
  };

  /**
   * types list
   * @returns {Array} types Array
   */
  Kpi.prototype.types = function types() {
    return new Array('Medical', 'Non Medical');
  };

  /**
   * categories list
   * @returns {Array} categories Array
   */
  Kpi.prototype.categories = function categories() {
    return new Array('Clinical', 'Nurse', 'Admin');
  };

  /**
   * departments list
   * @returns {Array} departments Array
   */
  Kpi.prototype.departments = function departments() {
    return new Array('ICU', 'LTC', 'PED');
  };

  /**
   * levelOfCare list
   * @returns {Array} levelOfCare Array
   */
  Kpi.prototype.levelOfCare = function levelOfCare() {
    return new Array('I', 'II', 'IIIA', 'IIIB');
  };

  /**
   * assessments list
   * @returns {Array} assessments Array
   */
  Kpi.prototype.assessments = function assessments() {
    return new Array('Satisfactory', 'UnSatisfactory');
  };

  /**
   * items list
   * @returns {Array} items Array
   */
  Kpi.prototype.items = function items() {
    return new Array('Cleaness', 'Hygiene');
  };

  /**
   * contracts list
   * @returns {Array} contracts Array
   */
  Kpi.prototype.contracts = function contracts() {
    return new Array('ARAMCO', 'CASH', 'INSURANCE', 'MILITARY', 'MOH');
  };

  /**
   * Medications list
   * @returns {Array} Medications Array
   */
  Kpi.prototype.medications = function medications() {
    return new Array('Medication 1', 'Medication 2', 'Medication 3', 'Medication 4', 'Medication 5');
  };

  /**
   * outcomes list
   * @returns {Array} outcomes Array
   */
  Kpi.prototype.outcomes = function outcomes() {
    return new Array('Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5');
  };

  /**
   * errorStages list
   * @returns {Array} errorStages Array
   */
  Kpi.prototype.errorStages = function errorStages() {
    return new Array('Normal', 'Moderate', 'Serious');
  };

  return Kpi;

}]);