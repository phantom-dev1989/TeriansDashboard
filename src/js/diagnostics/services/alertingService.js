(function (module) {

    var alertingSvc = function (toastr) {

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        var addWarning = function (message) {
            toastr.warning(message);
        };

        var addError = function (message) {
            toastr.error(message);
        };

        var addInfo = function (message) {
            toastr.info(message);
        };

        var addSuccess = function (message) {
            toastr.success(message);
        };

        return {
            addWarning: addWarning,
            addError: addError,
            addInfo: addInfo,
            addSuccess: addSuccess
        };
    };

    module.factory("alertingSvc", alertingSvc);

}(angular.module("app")));