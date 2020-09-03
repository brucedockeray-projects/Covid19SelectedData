
  
// https://jsfiddle.net/BlackLabel/sxuhq3pn/  
//$.get('graphdata/graph_data_UKGM_cu.csv', function(csv) {

$(document).ready(function() {

  $.get('graphdata/graph_data_florida_combined.csv', function(data) {

    $('#containerChartFlorida').highcharts({
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
      text: 'Covid New Cases (Florida)'
    },
    });
  });


$.get('graphdata/graph_data_california_combined.csv', function(data) {

    $('#containerChartCalifornia').highcharts({
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
      text: 'Covid New Cases (California)'
    },
    });
  });

$.get('graphdata/graph_data_texas_combined.csv', function(data) {

    $('#containerChartTexas').highcharts({
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
      text: 'Covid New Cases (Texas)'
    },
    });
  });

$.get('graphdata/graph_data_georgia_combined.csv', function(data) {

    $('#containerChartGeorgia').highcharts({
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
      text: 'Covid New Cases (Georgia)'
    },
    });
  });

$.get('graphdata/graph_data_nevada_combined.csv', function(data) {

    $('#containerChartNevada').highcharts({
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
      text: 'Covid New Cases (Nevada)'
    },
    });
  });

$.get('graphdata/graph_data_alabama_combined.csv', function(data) {

    $('#containerChartAlabama').highcharts({
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
      text: 'Covid New Cases (Alabama)'
    },
    });
  });

$.get('graphdata/graph_data_louisiana_combined.csv', function(data) {

    $('#containerChartLouisiana').highcharts({
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
      text: 'Covid New Cases (Louisiana)'
    },
    });
  });



// this bit at the end to close off the document ready function

});

