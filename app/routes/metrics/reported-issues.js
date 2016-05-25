import Ember from 'ember';

export default Ember.Route.extend({
	issueService: Ember.inject.service('issue'),
	model: function(){
		return this.get('issueService').reportedIssues();

	}
});
