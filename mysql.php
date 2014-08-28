<?php
// connect to database
$con=mysqli_connect("localhost","u511663752_niko","0acc1020,","u511663752_swag");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// query
$result = mysqli_query($con,"SELECT * FROM sensors"); 

// write results into array
$array = array();
while ($row = mysqli_fetch_array( $result ))
{
    $array[] = $row;
}

// create json file
echo json_encode($array);
?>

