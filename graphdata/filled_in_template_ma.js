
  $.get('graphdata/graph_data_UKGM_ma.csv', function(csv) {
  $('#containerChart3').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and Germany)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});


  $.get('graphdata/graph_data_UKSP_ma.csv', function(csv) {
  $('#containerChart4').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and Spain)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});


  $.get('graphdata/graph_data_UKUS_ma.csv', function(csv) {
  $('#containerChart5').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and US)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});


  $.get('graphdata/graph_data_UKNL_ma.csv', function(csv) {
  $('#containerChart6').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and Netherlands)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});


  $.get('graphdata/graph_data_UKFR_ma.csv', function(csv) {
  $('#containerChart7').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and France)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});


  $.get('graphdata/graph_data_UKIT_ma.csv', function(csv) {
  $('#containerChart8').highcharts({
	  chart: {
		  type: 'spline'
	  },
	  data: {
		  csv: csv,
		  switchRowsAndColumns: true,
		  
		 
		  
	  },
	  title: {
		  text: 'Covid Mortality (United Kingdom and Italy)'
	  },
	  xAxis:{

	  	    allowDecimals:false,
	  		title: {
			 text: 'Days after Zero (Zero is defined as the date where cumulative mortality exceeds 50)'
		  },
		  	categories:[],
		    
		},

	  yAxis: {
	  	  type: 'logarithmic',
	  	  allowDecimals: false,
		  title: {
			  text: 'Number of deaths'
		  }

	  }
	  
  });
});

