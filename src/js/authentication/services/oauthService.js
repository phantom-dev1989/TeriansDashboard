(function (module) {

    module.factory("oauthSvc", oauthSvc);

    oauthSvc.$inject =['$http','formEncode','currentUserSvc'];

    function oauthSvc($http, formEncode, currentUserSvc) {

        return {
            login: login
        };

        function login(username, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };

            var data = formEncode({
                username: username,
                password: password,
                grant_type: "password"
            });

            return $http.post("/login", data, config)
                .then(function (response) {
                    currentUserSvc.setProfile(username, response.data.access_token);
                    return username;
                });
        };
    };

}(angular.module("app")));