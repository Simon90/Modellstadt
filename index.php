<!DOCTYPE html>
<html>
  <head>
    <meta name="generator"
    content="HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39" />
    <meta charset="utf-8" />
    <title>SWAG City Monitor</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <link rel="stylesheet" href="css/modellstadt.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  </head>
  <body>
  <!-- Navigation bar at the top of the page -->
  <div class="navbar navbar-inverse navbar-fixed-top" id="navbar"></div>
  <header class="jumbotron subhead">
    <div class="container">
      <h1>
      <img src="swag.png" style="padding-right:3%; height:100px" />City Monitor</h1>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div id="data" class="col-md-4">
        <table id="table1" class="table table-striped table-responsive"> </table>
      </div>
      <div id="map-area" class="col-md-8">
        <div id="map"></div>
      </div>
    </div>
    <hr />
  </div>
  <!-- Le javascript
        ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
  <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script> 
  <script src="js/bootstrap.min.js"></script> 
  <script src="js/map.js"></script></body>
</html>
	