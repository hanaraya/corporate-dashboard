import Ember from 'ember';

export default Ember.Service.extend({
	markers: function(){
		var urlTemplate = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
		// var key = 'key=AIzaSyDVwpHFF8RRCAPrhJYUO2UVWeC3EN-oaow';
		// var and = '&';
		
		return Ember.$.get('employee/employee-location.json').then(function(results){
			var promises = [];
			results.forEach(function(result){
					var prom = new Promise(function(resolve, reject){
						return fetch(urlTemplate+result.office.location).then(function(response){
							return response.text().then(function(text){
								var geo = JSON.parse(text);
								resolve({name: result.office.name, location: result.office.location, geometry: geo.results[0].geometry, count: result.office.employeeCount});
							});
						});
					});
					promises.push(prom);
				});
			return Promise.all(promises);
		});		
	}
});
