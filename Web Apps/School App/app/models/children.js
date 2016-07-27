angular.module('yapp').factory('Children', [function(){

    /**
     *  Name: Children (Constructor)
     *  Purpose: initialize variables for first use
     */
    function Children(name) {
        this.name = (name==null) ? "XYZ" : name;
    };
    

    return Children;

}]);