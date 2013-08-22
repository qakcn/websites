function mapinit() {
	var mapOptions = {
		center: new google.maps.LatLng(22.1393, 100.0722),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var markerOptions = {
		position: new google.maps.LatLng(22.1393, 100.0722)
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker(markerOptions);
	maker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', mapinit);