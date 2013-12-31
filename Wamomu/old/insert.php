<?php
$con=mysqli_connect("localhost","root","admin","wamomu");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  
$result = mysqli_query($con,"SELECT * FROM users");

while($row = mysqli_fetch_array($result)){
	$nextID = $row["Userid"]+1;
}

$sql="INSERT INTO users (Userid, Username, Password)
VALUES
($nextID,'$_POST[Username]','$_POST[Password]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "1 record added";

mysqli_close($con);
?>