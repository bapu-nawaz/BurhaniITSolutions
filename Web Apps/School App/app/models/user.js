app.factory('User', [function(){

    /**
     *  Name: User (Constructor)
     *  Purpose: initialize variables for first use
     */
    function User(id, name, email, pass) {
        this.id = (id==null) ? 0 : id;
        this.name = (name==null) ? "XYZ" : name;
        this.email = (email==null) ? "XYZ@mail.com" : email;
        this.pass = (pass==null) ? "XYZ123" : pass;
    };
    

    return new User();

}]);