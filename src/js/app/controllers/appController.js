/**
 * Created by stromero on 8/18/2014.
 */
(function (module) {

    var helloWorldCtrl = function ($scope) {


        $scope.message = "Steven Romero";
        // Get Data from the service
        // Get Data form Promise
        //testHTTPSvc.getTestData().then(
        //   function(data){
        //       $scope.message = data;
        //},
        //   function(statusCode){
        //       $log.error(statusCode);
        //   }
        // );
    };

    module.controller("helloWorldCtrl", helloWorldCtrl);

}(angular.module("app")));