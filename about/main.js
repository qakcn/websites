$(function(){
	//获取Google Map JavaScript API
	//$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDAsqHGSM9lkpKKMeXBjNRCaAGvnptVlFw&sensor=false&callback=mapinit");
});

//Google Map API初始化
function mapinit(){
	var mapOptions = {
		center: new google.maps.LatLng(22.1393, 100.0722),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var markerOptions = {
		position: new google.maps.LatLng(22.1393, 100.0722)
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker(markerOptions);
	marker.setMap(map);
}