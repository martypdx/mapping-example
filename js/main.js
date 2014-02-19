function loadScript() {
	try {

	var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = 'https://maps.googleapis.com/maps/api/js?' +
	        'key=AIzaSyCOvbwKfuTbDN5d4YMRltTOaK5RH30VYa8&sensor=true&' +
	        'callback=mapping.loadMap';
	    document.body.appendChild(script);
	} catch(e){
		document.getElementById('map-canvas').innerHTML = e.toString()
	}
}

window.onload = loadScript
	
