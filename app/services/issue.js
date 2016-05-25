import Ember from 'ember';

export default Ember.Service.extend({
	reportedIssues: function(){
		return Ember.$.get('issue/issues.json').then(function(results){
			return results.issues.map(function(issue){
				issue.time = d3.time.format('%Y-%m-%d').parse(issue.time);
				return issue;
			});
		});
	}
});
