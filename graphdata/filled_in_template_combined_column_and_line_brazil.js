
  
// https://jsfiddle.net/BlackLabel/sxuhq3pn/  
//$.get('graphdata/graph_data_UKGM_cu.csv', function(csv) {

$(document).ready(function() {

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



// this bit at the end to close off the document ready function

});
