(function (module) {

    // Only if third party dependency has a defining object
    module.value("toastr", toastr);
    module.value("moment", moment);

}(angular.module("app")));