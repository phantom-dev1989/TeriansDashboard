(function (module) {

    module.factory("alertingSvc", alertingSvc);

    alertingSvc.$inject =['toastr'];

    function alertingSvc(toastr) {

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

        return {
            addWarning: addWarning,
            addError: addError,
            addInfo: addInfo,
            addSuccess: addSuccess
        };

        function addWarning(message) {
            toastr.warning(message);
        };

        function addError(message) {
            toastr.error(message);
        };

        function addInfo(message) {
            toastr.info(message);
        };

        function addSuccess(message) {
            toastr.success(message);
        };

    };

}(angular.module("app")));