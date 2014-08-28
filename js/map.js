// center the map
var map = L.map('map').setView([51.9743713, 7.41444848], 17);

		
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
			}).addTo(map);
			

// relative map height			
$("#map").height($(window).height()*0.6);
map.invalidateSize();


// No Scrollbar 
		$('html, body').css({
		'overflow': 'hidden',
		'height': '100%'
		})
		
		
		

// refresh data 
// returns json object		
function refreshData() 
  {
    $.ajax({
	  type: "GET",	
      url: "mysql.php",     //the script to call to get data          
      data: "",             //you can insert url argumnets here 
      dataType: 'json',     //data format      
      success: createTable  //success function
    });
  } 

// Execute every 5 seconds
window.setInterval(refreshData, 5000); 
  

// create table content
function createTable(data)  {
	var type = "";
	var value = "";
	var unit = "";
	var tbl_body = "";
	$.each(data, function(i, item) {
		var tbl_row = "";
		type = (item.Type);
		value = (item.Value);
		unit = (item.Unit);
		tbl_row = "<td>"+type+"</td><td>"+value+"</td><td>"+unit+"</td><td>";
		tbl_body += "<tr>"+tbl_row+"</tr>";
	});
	$("#table1 tbody").html(tbl_body); //insert into body of table1
}  

		






$( document ).ready(function() {
    refreshData();
});