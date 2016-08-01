app.service('Api', ['$http', '$q', '$rootScope',function($http, $q, $rootScope) {

    function Api() {
    };
    
    /**
     * Post
     *
     * @params:
     * data: Object
    **/
    Api.prototype.post = function(url, data) {
        
        var deferred = $q.defer();
        
        $http.post(url, data)
            .success(function(data, status, headers, config) {
                deferred.resolve(data);  
            })
            .error(function(data, status, headers, config) {
                console.log('an error has occured', data, status);
                // execute callback function
                deferred.reject(data);
            });
        return deferred.promise;
    };

    /**
     * Post with file
     *
     * @params:
     * data: Object
    **/
    Api.prototype.postFile = function(url, data) {
        
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: url,
            // headers: {'Content-Type': 'multipart/form-data'},
            headers: {'Content-Type': undefined},
            data: data,
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                return formData;
            }
        }).success(function(data, status, headers, config) {
            deferred.resolve(data);  
        })
        .error(function(data, status, headers, config) {
            console.log('an error has occured', data, status);
            // execute callback function
            deferred.reject(data);
        });

        return deferred.promise;
    };

    /**
     * Get
     *
     * @params:
    **/
    Api.prototype.get = function(url) {
        
        console.log("URL:",url);
        var deferred = $q.defer();
        $http.get(url)
            .success(function(data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                console.log('an error has occured', data, status);
                // execute callback function
                deferred.reject(data);
            });
        return deferred.promise;
    };

    /**
     * Get
     *
     * @params:
    **/
    Api.prototype.put = function(url, data) {
        var deferred = $q.defer();
        $http.put(url, data)
            .success(function(data, status, headers, config) {
                deferred.resolve(data);  
            })
            .error(function(data, status, headers, config) {
                console.log('an error has occured', data, status);
                // execute callback function
                deferred.reject(data);
            });
        return deferred.promise;
    };

    return new Api();
}]);