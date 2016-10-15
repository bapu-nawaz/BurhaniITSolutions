angular.module('yapp').factory('Children', [function(){

    /**
     *  Name: Children (Constructor)
     *  Purpose: initialize variables for first use
     */
    function Children() {
    	this.data = new Array();
    };
    
    Children.prototype.setData = function (data) {
    	for (var i = data.length - 1; i >= 0; i--) {
            this.addChild(data[i]);
        }
    	console.log("SET DATA:",data);
    }

    Children.prototype.addChild = function(child) {
        this.data.push(child);
    };

    return Children;

}]);