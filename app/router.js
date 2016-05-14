import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('geospatial');
  this.route('metrics');
  this.route('issues');
});

export default Router;
