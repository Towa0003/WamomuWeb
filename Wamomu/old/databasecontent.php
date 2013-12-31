<?php
$con=mysqli_connect("localhost","root","admin","wamomu");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM users");

echo "<table border='1'>
<tr>
<th>Userid</th>
<th>Username</th>
<th>Password</th>
</tr>";

while($row = mysqli_fetch_array($result))
  {
  	$maxwert = $row["Userid"];
  	if($row['Username'] == ('Test1')){
  		echo "<p>Jop" .$maxwert ."</p>";
  	}
	echo "<p>Jop" .$maxwert ."</p>";
	
  echo "<tr>";
  echo "<td>" . $row['Userid'] . "</td>";
  echo "<td>" . $row['Username'] . "</td>";
  echo "<td>" . $row['Password'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysqli_close($con);
?>