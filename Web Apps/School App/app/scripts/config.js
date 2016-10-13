app.factory('config', [function(){

    /**
     *  Name: config (Constructor)
     *  Purpose: initialize variables for first use
     */
    function config() {
        var ipAddress = "http://192.168.100.2:8000";
        var components = "/BITS/scripts/MSA/";

        this.loginURL = ipAddress + components + "getParentDetailByMail.php?mail=";
        this.userData = ipAddress + components + "getParentDetailByID.php?id=";
        this.children = ipAddress + components + "getChildrenByParentMail.php?mail=";

        // API File name for Activity Detail to be called alone (add 3 more)
        this.activityDetailURL = ipAddress + components + "getChildrenActivityDetailResponsive.php?date=";
    };    

    config.prototype.login = function(param) {
        param = this.loginURL + param;
        return param;
    };

    config.prototype.getUser = function(param) {
        param = this.userData + param;
        return param;
    };

    config.prototype.getChildren = function(param) {
        param = this.children + param;
        return param;
    };

    // Function to return appended date for AD (add 3 more)
    config.prototype.getActivityDetail = function(param1, param2) {
        var url = this.activityDetailURL + param1 + "&std=" + param2;
        return url;
    };

    return new config();

}]);