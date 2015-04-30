(function (module) {

    module.factory("loginRedirectSvc", loginRedirectSvc);

    loginRedirectSvc.$inject =['$q','$location'];

    function loginRedirectSvc($q, $location) {

        return {};
    };

}(angular.module("app")));