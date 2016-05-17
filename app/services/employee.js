import Ember from 'ember';

export default Ember.Service.extend({
	markers: function(){
		return Ember.$.get('employee/employee-location.json');
	}
});
