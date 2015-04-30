(function (module) {

    module.factory("highChartsResizeSvc", highChartsResizeSvc);

    function highChartsResizeSvc() {
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

}(angular.module("app")));