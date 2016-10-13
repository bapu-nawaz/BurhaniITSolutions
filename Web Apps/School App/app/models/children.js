angular.module('yapp').factory('Children', [function(){

    /**
     *  Name: Children (Constructor)
     *  Purpose: initialize variables for first use
     */
    function Children() {
    	this.data = new Array();
    };
    
    Children.prototype.setData = function (data) {
    	this.data.push(data[0]);
    	console.log("SET DATA:",data);
    }

    return Children;

}]);