import Ember from 'ember';

export default Ember.Route.extend({
	redirect(model, transition) {
      this.transitionTo('metrics.reported-issues');
  },
	customerService: Ember.inject.service('customer'),
	issueService: Ember.inject.service('issue'),
	model2: function(){
		return { payingCustomers: this.get('customerService').payingCustomers(), reportedIssues: this.get('issueService').reportedIssues()};
	},
	model : function(){
		return this.get('customerService').payingCustomers();
	}
});

