<?php
$servername = "localhost";
$username = "matkaklubi";
$password = "matkaklubi";
$dbname = "matkaklubi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, alguskuup, nimetus, pilt1 FROM matkad";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. 
    " - Matk: " . $row["nimetus"]. 
    " Algus:" . $row["alguskuup"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>