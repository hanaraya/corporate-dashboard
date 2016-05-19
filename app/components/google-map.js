import Ember from 'ember';

export default Ember.Component.extend({
  markers: Ember.computed('params.[]', function(){
    return this.get('params')[0];
  }),

  map : null,

  insertMap: function() {
   var map = new google.maps.Map(this.$('.map-canvas')[0], {
    zoom: 3,
    center: new google.maps.LatLng(41.850033, -87.6500523),
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
  console.log(markers);
  var style = 'CIRCLE';
  markers.forEach(function(marker){
    var coords = marker.geometry.location;
    var count = marker.count;
    var latLng = new google.maps.LatLng(coords.lat,coords.lng);
    var contentString = '<div>' +'<p>'+marker.name+ '</p>'+'<p>'+marker.location+ '</p>'+ '<p>'+count+ '</p>' + '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    if(style === 'CIRCLE'){
      var mapCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: latLng,
        radius: Math.sqrt(count) * 10000
      });
      google.maps.event.addListener(mapCircle, 'click', function(ev){
        infoWindow.setPosition(ev.latLng);
        infoWindow.open(map);
      });
    }
    else{
      var mapMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: count.toString()
      });

      mapMarker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

  });
}

});
