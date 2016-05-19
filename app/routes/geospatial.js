import Ember from 'ember';

export default Ember.Route.extend({
	employeeService: Ember.inject.service('employee'),
	model: function(){
		return this.get('employeeService').markers();
	}
});
