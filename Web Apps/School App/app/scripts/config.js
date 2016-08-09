app.factory('config', [function(){

    /**
     *  Name: config (Constructor)
     *  Purpose: initialize variables for first use
     */
    function config() {
        var url = "http://192.168.1.100";
        var components = "/BITS/scripts/";

        this.loginURL = url + components + "getUserByMail.php?mail=";
        this.userData = url + components + "getUserByID.php?id=";
        this.children = url + components + "getChildrenByParentID.php?id=";
    };    

    config.prototype.getUser = function(param) {
        param = this.userData + param;
        return param;
    };

    config.prototype.getChildren = function(param) {
        param = this.children + param;
        return param;
    };

    return new config();

}]);