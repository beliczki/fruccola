<article class="content">

    <div class="container">
      <div id="map">
        
      </div>
    </div>

    <div class="overlay">
        <div class="selector">
            <h1>Map</h1>
            <p>
                <a href="https://www.google.com/maps/place/Fruccola+Krist%C3%B3f+t%C3%A9r/@47.4988429,19.0478982,16z/data=!4m13!1m7!3m6!1s0x4741dc14ca087bed:0xd29042512db8ff08!2sBudapest,+Arany+J%C3%A1nos+u.+32,+1051+Hungary!3b1!8m2!3d47.5025338!4d19.0533856!3m4!1s0x0:0x18a1aaf800f814c5!8m2!3d47.4955717!4d19.0519814">
                    <span>Fruccola - <br/></span>
                    Kristóf
                    <span> square <br/> <span class="number">3.</span></span>
                </a>
            </p>
            <p>
                <a href="https://www.google.com/maps/place/Budapest,+Arany+J%C3%A1nos+u.+32,+1051+Hungary/@47.5003216,19.048263,16z/data=!4m8!1m2!2m1!1sfruccola+Budapest,+Arany+J%C3%A1nos+u+32,+1052+Magyarorsz%C3%A1g!3m4!1s0x4741dc14ca087bed:0xd29042512db8ff08!8m2!3d47.5025338!4d19.0533856">
                    <span>Fruccola - <br/></span>
                    Arany
                    <span> János street <br/> <span class="number">32.</span></span>
                </a>
            </p>

        </div>
    </div>

</article>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfJ6awsy5QoKSVxm8es118Wg6sEJ_ulA4&amp;sensor=false"></script>
<script>
  var map, mapOptions,
      markers = [],
      iconOptions;

  mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        clickableIcons: true,
        zoomControl: false,
        styles: [{featureType: 'poi.business', stylers: [{visibility: 'off'}]}],
        center: new google.maps.LatLng(47.4993, 19.0526),
        zoom: 15,
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  iconOptions = {
    url: 'img/marker.png',
    size: new google.maps.Size(50, 80),
    scaledSize: new google.maps.Size(25, 40),
    anchor: new google.maps.Point(13, 40)
  };

  [{lat: 47.502534, lng: 19.053386}, {lat: 47.495476, lng: 19.0520404}].forEach(function(poi){
    var marker, markerOptions;

    markerOptions = {
      map: map,
      position: new google.maps.LatLng(poi.lat, poi.lng),
      icon: iconOptions
    };

    marker = new google.maps.Marker(markerOptions);
  });
</script>
