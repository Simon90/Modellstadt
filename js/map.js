var map = L.map('map').setView([51.9743713, 7.41444848], 17);

		
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
			}).addTo(map);
			
			
$("#map").height($(window).height()*0.6);
map.invalidateSize();

// No Scrollbar 
		$('html, body').css({
		'overflow': 'hidden',
		'height': '100%'
		})