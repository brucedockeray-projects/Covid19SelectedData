
  
// https://jsfiddle.net/BlackLabel/sxuhq3pn/  
//$.get('graphdata/graph_data_UKGM_cu.csv', function(csv) {

$(document).ready(function() {

  $.get('graphdata/graph_data_combined_mortality_uk.csv', function(data) {

    $('#containerChartUKmt').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid Mortality (United Kingdom)'
    },
    });
  });


$.get('graphdata/graph_data_combined_confirmed_uk.csv', function(data) {

    $('#containerChartUKcd').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid New Cases (UK)'
    },
    });
  });

$.get('graphdata/graph_data_combined_mortality_brazil.csv', function(data) {

    $('#containerChartBrazilmt').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid Mortality (Brazil)'
    },
    });
  });


$.get('graphdata/graph_data_combined_confirmed_brazil.csv', function(data) {

    $('#containerChartBrazilcd').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid New Cases (Brazil)'
    },
    });
  });

/*
$.get('graphdata/graph_data_combined_mortality_us.csv', function(data) {

    $('#containerChartUSmt').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid Mortality (US)'
    },
    });
  });

*/

$.get('graphdata/graph_data_combined_confirmed_us.csv', function(data) {

    $('#containerChartUScd').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid New Cases (US)'
    },
    });
  });

$.get('graphdata/graph_data_combined_mortality_us.csv', function(data) {

    $('#containerChartUSmt').highcharts({
      chart: {
        type: "column",
        color: "#00FF00"
      },
      

      data: {
        csv: data,
        switchRowsAndColumns: true,
        complete: function(options) {
          options.series[1].type = 'line';
          //options.series[3].type = 'line';
        }
      },
      title: {
      text: 'Covid Mortality  (US)'
    },
    });
  });


// this bit at the end to close off the document ready function


});

