(function (module) {

    var highChartsResizeSvc = function () {

        var chartEvents = {
            load: function () {
                // just calling this.reflow() here does not work
                // use setTimeout({ }, 0) to move reflow to the
                // end of the execution queue, after rendering
                var chart = this;
                setTimeout(function () {
                    chart.reflow();
                }, 0);
            }
        };

        return {
            chartEvents: chartEvents
        };
    };
    module.factory("highChartsResizeSvc", highChartsResizeSvc);

}(angular.module("app")));