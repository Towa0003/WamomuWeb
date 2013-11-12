<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost', 'root', 'admin', 'wamomu');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
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
  echo "<tr>";
  echo "<td>" . $row['Userid'] . "</td>";
  echo "<td>" . $row['Username'] . "</td>";
  echo "<td>" . $row['Password'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysqli_close($con);
?>