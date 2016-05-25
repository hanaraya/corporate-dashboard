import Ember from 'ember';

export default Ember.Service.extend({
	payingCustomers: function(){
		return Ember.$.get('customer/paying-customer.json').then(function(results){
			console.log(results);
			return results.payingCustomers.map(function(customer){
				customer.time = d3.time.format('%Y-%m-%d').parse(customer.time);
				console.log(customer);
				return customer;
			});
		});
	}
});
