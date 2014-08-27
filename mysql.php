<?php
$con=mysqli_connect("localhost","u511663752_niko","0acc1020,","u511663752_swag");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM sensors");

while($row = mysqli_fetch_array($result)) {
    echo '<tr>';
    echo '<td>' . $row['Type'] . '</td>';
    echo '<td>' . $row['Value'] . '</td>';
	echo '<td>' . $row['Unit'] . '</td>';
}
mysqli_close($con);
?>

