var UserActive = function(){
	
	
	var getUserReport = function(){
		$.ajax({
			url : basePath + "/report/user/active",
			type : "POST",
			data : {
			},
			dataType : "json",
			success: function(result){
	        	var lineData = result.data;
	        	var series = [
	        	        	   {
	        	        		   label: '用户活跃数',
	        	        		   showMarker: true
	        	        	   }              
	        	];
	        	createLineChart(lineData, series);
	        	
			}
		});
	};
	
	
	function test(lineData, series) {
		
		 var line1=[["2014-01",10], ["2014-02",20], ["2014-03",50], ["2014-04",70], ["2014-08",50]];
		  var plot2 = $.jqplot('userLineChart', [line1], {
		      title:'Customized Date Axis',
		      seriesDefaults: {
		          rendererOptions: {
		              smooth: true
		          }
		      },
		      axes:{
		        xaxis:{
		          renderer: $.jqplot.CategoryAxisRenderer/*,
		          renderer:$.jqplot.DateAxisRenderer, 
		          tickOptions:{formatString : '%Y-%m'},
		          tickInterval: "30 days",*/
		        }
		      },
		      series:[{lineWidth:4, markerOptions:{style:'square'}}]
		  });
		
	};
	
	function createLineChart(lineData, series) {
		//$.jqplot.config.enablePlugins = true;
		//$.jqplot.Cursor.cursorLegendFormatString = '%s %s, %s';
		if(lineData == null || lineData.length == 0){
			return;
		}

		dateLineChart = $.jqplot('userLineChart', lineData, {
			//title: lineTitle,
			axes : {
				xaxis : {
					//label : '时间',
					//labelRenderer : $.jqplot.CanvasAxisLabelRenderer,
					//renderer : $.jqplot.DateAxisRenderer,
					renderer: $.jqplot.CategoryAxisRenderer,
					/*rendererOptions : {
						tickRenderer : $.jqplot.CanvasAxisTickRenderer
					},
					tickOptions : {
						fontSize : '10pt',
						fontFamily : 'Tahoma',
						angle : -40,
						formatString : '%Y-%m'
					},
					tickInterval : '1 month',*/
					drawMajorGridlines: true
						
				},
				yaxis : {
					//label : '单位成本(元)',
					//labelRenderer : $.jqplot.CanvasAxisLabelRenderer,
					rendererOptions : {
						tickRenderer : $.jqplot.CanvasAxisTickRenderer
					},
					tickOptions : {
						fontSize : '10pt',
						fontFamily : 'Tahoma',
						angle : 30,
						formatString: '%.0f'
					}/*,
					min: 0,
					max:60*/
					//numberTicks:4
				}
			},
			seriesDefaults : {
				pointLabels: { 
					show:true 
				},
				rendererOptions : {
					smooth: true,
					animation : {
						show : true
					}
				},
				showMarker : false,
				lineWidth : 1.5,
				markerOptions : {
					//style : 'square'
					//size: 3
				}
			},
			series : series,
			legend : {
				show : true,
				renderer: $.jqplot.EnhancedLegendRenderer
//					rendererOptions: {
//			            numberRows: 1
//			        }
				/*placement : 'outsideGrid'*/
				//location : 'n'
				//placement: 'outside',
				//location : 'nw'
			},
			cursor:{
				show: false, //true
				zoom: false,
				style: 'pointer',
				showTooltip:true,
				constrainZoomTo: 'x',
				looseZoom: true,
				showVerticalLine:true,
				showCursorLegend:false,
				showTooltipDataPosition: true,
				followMouse: false,
				tooltipFormatString: '%s %s, %s',
				tooltipLocation: 'nw'
			},
	        highlighter:{
	        	show:true,
	        	showTooltip: false
	        }
			/*highlighter: {
	        	   showMarker:true,
	        	   sizeAdjust: 10,
	        	   tooltipAxes: 'xy',
	        	   yvalues: 2,
	        	   tooltipLocation : 'nw',
	        	   tooltipOffset: 2,
	        	   formatString:'<div class="totalChartStyle specFont">时间:%s,单位成本:%s</div>'
//	          show: true,
//	          showtooltip: true,
//	          tooltipLocation : 'ne',
//	          tooltipAxes: 'both',
//	          tooltipFormatString: '<span class="specFont">%.2f</span>',
//	          useAxesFormatters: false
	       },*/
			/*cursor : {
			    show: true,
				zoom : true,
				looseZoom : true
			}*/ 
		});
		
		
		//$(".jqplot-table-legend").css({ left: "25px"});
		/*var lengendTop =  $(".jqplot-table-legend").css("top").replace ("px","");
		$("<div id='info' class='info'>↓单击可隐藏&frasl;显示</div>").css({
			position: "absolute",
			display: "none",
			top: "-15px" ,
			right:  "0px" ,
			padding: "2px"
		}).appendTo("#lineChart").fadeIn(200);*/
		
	};
	
	
	
	
    return {
        init: function () {
        	
        	getUserReport();
        	/*
        	var lineData = [
        	    [["2014-01",10],["2014-02",20],["2014-03",50],["2014-04",50],["2014-08",50]]
        	];
        	
        	var series = [
        	   {
        		   label: '用户活跃数',
        		   showMarker: true
        	   }              
        	];
        	
        	createLineChart(lineData, series);
        	//test();
        	*/
        }

    };	
    
	
}();
