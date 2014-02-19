var mapping = new Mapping()

function Mapping(){
	var self = this
	 ,	map, el, current

	this.loadMap = function(){
		el = document.getElementById('map-canvas')
	    try {
	        self.initialize(el, function(){
	            setTimeout(self.addMarkers, 1000)
	        })
		} catch(e){
			el.innerHTML = e.toString()
		}
    }

	this.initialize = function(el, cb) {
		navigator.geolocation.getCurrentPosition(function(position){
			createMap(position.coords)
			cb()
		}, error)
	}

	function error(err){
		console.log('err', err)
	}

	function createMap(coords){
		current = coords
		var options = {
			center: new google.maps.LatLng(coords.latitude, coords.longitude)
		 ,	zoom: 15
		}
		map = new google.maps.Map(el, options);

		addMarker({ 
			location: options.center 
		 ,	image: 'http://www.google.com/mapfiles/arrow.png'
		})
	}

	var icons = {
		red: 'images/red-heart.png',
		orange: 'images/orange-heart.png',
		yellow: 'images/yellow-heart.png',
		black: 'images/black-heart.png'
	}

	function addMarker(options) {
		var marker = new google.maps.Marker({
			map: map
		 ,	position: options.location
		 ,	animation: options.animation || google.maps.Animation.DROP
		 ,	icon: options.image
		})       
	}

	this.addMarkers = function() {

		for (var i = 0; i < 10; i++) {
		  setTimeout(getAddFn(i), i * 75);
		}

		function offset(){
			var rnd = Math.floor(Math.random()*101)
			return -.005 + (rnd * .0001)
		}

		function icon(){
			var rnd = Math.floor(Math.random()*4)
			return icons[Object.keys(icons)[rnd]]
		}

		function getAddFn(i){
		  return function() {
			  addMarker({ 
				  location: new google.maps.LatLng(current.latitude + offset(), current.longitude + offset()), 
				  image: icon()
			  })
		  }
		}
	}
}

		
		







