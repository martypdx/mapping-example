function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?' +
        'key=AIzaSyCOvbwKfuTbDN5d4YMRltTOaK5RH30VYa8&sensor=false&' +
        'callback=mapping.loadMap';
    document.body.appendChild(script);
}

window.onload = loadScript
	
