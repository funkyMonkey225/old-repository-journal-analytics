
(function(w,d,s,g,js,fs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
  js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'));


$(document).ready(() => {

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
     * Create a new ViewSelector instance to be rendered inside of an
     * element with the id "view-selector-container".
     */
    var viewSelector = new gapi.analytics.ViewSelector({
        container: 'view-selector-container'
    });

    // Render the view selector to the page.
    viewSelector.execute();

    
    /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "chart-container".
     */
    var dataChart = new gapi.analytics.googleCharts.DataChart({
        query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:date',
        'start-date': '30daysAgo',
        'end-date': 'yesterday'
        },
        chart: {
        container: 'chart-container',
        type: 'LINE',
        options: {
            width: '100%'
        }
        }
    });


    /**
     * Render the dataChart on the page whenever a new view is selected.
     */
    viewSelector.on('change', function(ids) {
        dataChart.set({query: {ids: ids}}).execute();
    });

    });

    function addEventListener() {
    $ADD_EVENT.click(function (){
        console.log("listening");
        });
    };



    // //Initialization
    addEventListener();



});