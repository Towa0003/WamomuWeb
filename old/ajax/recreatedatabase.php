<?php
$con = mysqli_connect('localhost', 'root', 'admin', 'wamomu');
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


// Drop table
$sql="DROP TABLE users";

// Execute query
if (mysqli_query($con,$sql))
  {
  echo "Table persons droped successfully";
  }
else
  {
  echo "Error creating table: " . mysqli_error($con);
  }
  
  // Create table
$sql="
CREATE TABLE `users` (
  `Userid` int(11) NOT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
";

// Execute query
if (mysqli_query($con,$sql))
  {
  echo "Table persons created successfully";
  }
else
  {
  echo "Error creating table: " . mysqli_error($con);
  }
?>