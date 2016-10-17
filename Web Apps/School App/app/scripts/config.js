app.factory('config', [function(){

    /**
     *  Name: config (Constructor)
     *  Purpose: initialize variables for first use
     */
    function config() {
        var ipAddress = "http://110.34.35.224:3001/";
        var components = "/BITS/scripts/MSA/";

        this.loginURL = ipAddress + components + "getParentDetailByMail.php?mail=";
        this.userData = ipAddress + components + "getParentDetailByID.php?id=";
        this.children = ipAddress + components + "getChildrenByParentMail.php?mail=";
        this.sendApplicationURL = ipAddress + components + "postApplication.php";

        // API File name for Activity Detail to be called alone (add 3 more)
        this.activityDetailURL = ipAddress + components + "getChildrenActivityDetail.php?date=";
        this.dailyDiaryURL = ipAddress + components + "getChildrenDailyDiary.php?date=";
        this.attendanceDetailURL = ipAddress + components + "getChildrenAttendance.php?date=";

        this.forgotPasswordURL = ipAddress + components + "requestPassword.php?mail=";
    };    

    config.prototype.login = function(param) {
        return this.constructURL( this.loginURL, param);
    };



    config.prototype.getUser = function(param) {
        return this.constructURL( this.userData, param);
    };

    config.prototype.getChildren = function(param) {
        return this.constructURL( this.children, param);
    };

    config.prototype.forgotPassword = function(param) {
        return this.constructURL( this.forgotPasswordURL, param);
    };

    // Function to return appended date for AD (add 3 more)
    config.prototype.getActivityDetail = function(param1, param2) {
        return this.getConstructedURL(this.activityDetailURL, param1, param2);
    };

    config.prototype.getAttendanceDetail = function(param1, param2) {
        return this.getConstructedURL(this.attendanceDetailURL, param1, param2);
    };

    config.prototype.getHomeWork = function(param1, param2) {
        return this.getConstructedURL(this.dailyDiaryURL, param1, param2);
    };

    config.prototype.getConstructedURL = function(url, param1, param2) {
        url = url + param1 + "&std=" + param2;
        return url;
    };
    config.prototype.constructURL = function(url, param) {
        url = url + param;
        return url;
    };

    config.prototype.sendApplication = function(applicationDetails) {
        var url = this.sendApplicationURL + "?subject=" + applicationDetails.subject + "&recepient=" + applicationDetails.recepient + "&message=" + applicationDetails.message + "&stdId=" + applicationDetails.student;
        return url;
    };

    return new config();

}]);