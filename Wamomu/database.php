<?php
$con=mysqli_connect("localhost","root","admin","wamomu");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// // Create table
// $sql="CREATE TABLE Persons
// (
// Username CHAR(30),
// Password CHAR(30)
// )";

mysqli_query($con,"INSERT INTO users (Userid, Username, Password)
VALUES ('Peter', 'Griffin',35)");

mysqli_query($con,"INSERT INTO users (Userid, Username, Password)
VALUES ('Glenn', 'Quagmire',33)");
?>