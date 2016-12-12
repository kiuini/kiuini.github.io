$(function () {
  Highcharts.setOptions({
    colors: ['#67BCE6'],
    chart: {
        style: {
            fontFamily: 'sans-serif',
            color: '#fff'
        }
    }
});
  $('#container').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#36394B'
        },
        title: {
            text: 'Mean Score',
            style: {
              color: '#fff'
            }
        },
        xAxis: {
            tickWidth: 0,
            labels: {
              style: {
                  color: '#fff',
                 }
              },
            categories: [
              '2002',
              '2003',
              '2004',
              '2005',
              '2006',
              '2007',
              '2008',
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
            ]
        },
        yAxis: {
           gridLineWidth: .5,
		      gridLineDashStyle: 'dash',
		      gridLineColor: 'black',
           title: {
                text: '',
                style: {
                  color: '#fff'
                 }
            },
            labels: {
              formatter: function() {
                return Highcharts.numberFormat(this.value, 0, '', ',');
              },
              style: {
                  color: '#fff',
                 }
              }
            },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
		      column: {
			      borderRadius: 2,
             pointPadding: 0,
			      groupPadding: 0.1
            }
		    },
        series: [{
            name: 'Marks',
            data: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              368.0,
              378.4,
            ]
        }]
    });
});
