<?php
$nutzername = strval($_GET['benutzername']);
$passwort = strval($_GET['passwort']);


$con = mysqli_connect('localhost', 'wamomu', 'wamomu', 'wamomu');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }

$result = mysqli_query($con,"SELECT * FROM users");

while($row = mysqli_fetch_array($result)){
	if(($row["user"]==$nutzername) && ($row["password"]==$passwort)){
		echo "Nutzer existiert ->Login";
		header( 'Location: http://localhost/WamomuWeb/Wamomu/ajax/register.html');
		// return;
	}
}

echo "Password is nicht richtig!";

mysqli_close($con);
?>