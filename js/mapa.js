var mymap = L.map('mapid').setView([-12.960926, -38.431939], 17);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

 // 	if(navigator.geolocation){
 // 		navigator.geolocation.getCurrentPosition(showPosition);
 // 	}
 //
 // function showPosition() {
 // 	var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
 // }


var marker = L.marker([-12.960926, -38.431939]).addTo(mymap);
var marker2 = L.marker([-12.965519, -38.435686]).addTo(mymap);

  var circle = L.circle([-12.960926, -38.431939], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 25
  }).addTo(mymap);

  marker.bindPopup("<b>Estou aprendendo o curso</b><br>daqui!.").openPopup();
