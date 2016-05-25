import Ember from 'ember';

export default Ember.Route.extend({
	customerService: Ember.inject.service('customer'),
	issueService: Ember.inject.service('issue'),
	model2: function(){
		return { payingCustomers: this.get('customerService').payingCustomers(), reportedIssues: this.get('issueService').reportedIssues()};
	},
	model : function(){
		return this.get('customerService').payingCustomers();
	}
});

