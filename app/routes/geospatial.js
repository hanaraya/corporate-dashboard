import Ember from 'ember';

export default Ember.Route.extend({
	employeeService: Ember.inject.service('employee'),
	model: function(){

		// Create a <script> tag and set the USGS URL as the source.
        //var script = document.createElement('script');
        // (In this example we use a locally stored copy instead.)
        //script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
        //script.src = '/maps/documentation/javascript/tutorials/js/earthquake_GeoJSONP.js';
        //document.getElementsByTagName('head')[0].appendChild(script);
      // Loop through the results array and place a marker for each
      // set of coordinates.
      // window.eqfeed_callback = function(results) {
		return this.get('employeeService').markers();


        
	}
});
