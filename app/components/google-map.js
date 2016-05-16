import Ember from 'ember';

export default Ember.Component.extend({
    markers: Ember.computed('params.[]', function(){
        return this.get('params')[0];
    }),

    map : null,

    insertMap: function() {
       var map = new google.maps.Map(this.$('.map-canvas')[0], {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: google.maps.MapTypeId.TERRAIN
      });
       this.set('map', map);

       this.markMap(this.get('markers'));
   }.on('didInsertElement'),

   markMap: function(markers){
    if(!markers) {
        return;
    }
    var map = this.get('map');

    markers.forEach(function(marker){
        var coords = marker.geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        new google.maps.Marker({
            position: latLng,
            map: map
        });
    });

}
});
