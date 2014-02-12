<?php
$vname = strval($_GET['vname']);
$nname = strval($_GET['nname']);
$nutzername = strval($_GET['benutzername']);
$passwort = strval($_GET['passwort']);
$passwortrepeat = strval($_GET['passwortrepeat']);

echo $passwort . "  " . $passwortrepeat;

if($passwort==$passwortrepeat){
	echo "passwörter sind gleich :)";
}else{
	echo "Passwörter nicht gleich!";
	return;
}

$con = mysqli_connect('localhost', 'wamomu', 'wamomu', 'wamomu');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }

$result = mysqli_query($con,"SELECT * FROM users");




$sql="INSERT INTO users (id, vname, nname, user, password)
VALUES
('','$vname','$nname','$nutzername','$passwort')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "1 record added with ajax";

mysqli_close($con);
?>