<?php
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

$con = mysqli_connect('localhost', 'root', 'admin', 'wamomu');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }

$result = mysqli_query($con,"SELECT * FROM users");


$nextID = 1;
while($row = mysqli_fetch_array($result)){
	$nextID = $row["Userid"]+1;
}

$sql="INSERT INTO users (Userid, Username, Password)
VALUES
($nextID,'$nutzername','$passwort')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "1 record added with ajax";

mysqli_close($con);
?>