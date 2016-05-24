import Ember from 'ember';

export default Ember.Service.extend({
	payingCustomers: function(){
		return Ember.$.get('customer/paying-customer.json');
	}
});
