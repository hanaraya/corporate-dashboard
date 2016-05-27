import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.$.get('issue/issues.csv').then(function(response){
			var allRecords = response.split(/\r\n|\n/);
			var table = {};
			var rows = [];
			allRecords.forEach(function(record, index){
				var columns = record.split(/,/);
				if(index === 0)
					table.header = columns;
				else
					rows.push(columns);
			});
			table.rows = rows;
			console.log(table);
			return table;
		});


	}
});
