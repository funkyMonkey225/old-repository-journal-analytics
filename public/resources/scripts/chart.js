// const ViewSelector2 = require('./view-selector2.js');

(function(w,d,s,g,js,fs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
  js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'));


$(document).ready(()=> {
    gapi.analytics.ready(function() {


    var CLIENT_ID = '456569075688-n6uo0irm3rf0pjticr9ntjir3qmfa9uh.apps.googleusercontent.com';

    gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: CLIENT_ID,
    });

    /**
     * Store a set of common DataChart config options since they're shared by
     * both of the charts we're about to make.
     */
    var commonConfig = {
        query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:date'
        },
        chart: {
        type: 'LINE',
        options: {
            width: '100%'
        }
        }
    };


    /**
     * Query params representing the first chart's date range.
     */
    var dateRange1 = {
        'start-date': '14daysAgo',
        'end-date': '8daysAgo'
    };

    /**
     * Create a new ViewSelector2 instance to be rendered inside of an
     * element with the id "view-selector-container".
     */
    var viewSelector = new gapi.analytics.ext.ViewSelector2({
        container: 'view-selector-container',
    }).execute();

    
        /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "chart-container".
     */
    var dataChart1 = new gapi.analytics.googleCharts.DataChart(commonConfig)
        .set({query: dateRange1})
        .set({chart: {container: 'chart-container'}});

    /**
   * Create a new DateRangeSelector instance to be rendered inside of an
   * element with the id "date-range-selector-1-container", set its date range
   * and then render it to the page.
   */
    var dateRangeSelector1 = new gapi.analytics.ext.DateRangeSelector({
        container: 'date-range-selector-container'
    })
    .set(dateRange1)
    .execute();

    /**
     * Register a handler to run whenever the user changes the view.
     * The handler will update both dataCharts as well as updating the title
     * of the dashboard.
     */
    viewSelector.on('viewChange', function(data) {
        dataChart1.set({query: {ids: data.ids}}).execute();

        var title = document.getElementById('view-name');
        title.textContent = data.property.name + ' (' + data.view.name + ')';
    });


    /**
     * Register a handler to run whenever the user changes the date range from
     * the first datepicker. The handler will update the first dataChart
     * instance as well as change the dashboard subtitle to reflect the range.
     */
    dateRangeSelector1.on('change', function(data) {
        dataChart1.set({query: data}).execute();

        // Update the "from" dates text.
        var datefield = document.getElementById('from-dates');
        datefield.textContent = data['start-date'] + '&mdash;' + data['end-date'];
        });
    });

});

    
    



