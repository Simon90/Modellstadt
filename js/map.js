// center the map
var map = L.map('map').setView([51.9743713, 7.41444848], 17);

		
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
			}).addTo(map);
			

// relative map height			
$("#map").height($(window).height()*0.6);
map.invalidateSize();


	
			

// refresh data 
// returns json object		
function refreshData() 
  {
    $.ajax({
	  type: "GET",	
      url: "mysql.php",     //the script to call to get data          
      data: "",             //you can insert url argumnets here 
      dataType: 'json',     //data format      
      success: createContent  //success function
    });
  } 

// Execute every 10 seconds
window.setInterval(refreshData, 10000); 
  

// marker layer
var markers = new L.layerGroup();

// create table and map content
function createContent(data)  {
	map.removeLayer(markers); // clear map 
	var type = "";
	var value = "";
	var unit = "";
	var lat = "";
	var lon = "";
	var tbl_body = ""; //table body html string
	$.each(data, function(i, item) {
		var tbl_row = ""; //table row html string
		type = (item.Type);
		value = (item.Value);
		unit = (item.Unit);
		lat = (item.lat)
		lon = (item.lon)
		createMarkers(lat, lon, type, value, unit);
		tbl_row = "<td>"+type+"</td><td>"+value+"</td><td>"+unit+"</td><td>"; //fill row
		tbl_body += "<tr>"+tbl_row+"</tr>"; // fill table body
	});
	markers.addTo(map); //add markers to map
	$("#table1 tbody").html(tbl_body); //insert into body of table1
}  



function createMarkers(lat, lon, type, value, unit)  {
	var marker = new L.marker();
	marker.setLatLng([lat, lon]);
	marker.bindPopup(type +": "+value+" "+unit);
	markers.addLayer(marker);
}




$( document ).ready(function() {
    refreshData();
});