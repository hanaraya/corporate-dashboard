import Ember from 'ember';

export default Ember.Route.extend({	
	customerService: Ember.inject.service('customer'),
	model : function(){
		console.log('In nest route model');
		return this.get('customerService').payingCustomers();
	}
});
