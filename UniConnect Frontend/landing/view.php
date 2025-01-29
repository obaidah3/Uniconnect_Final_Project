<?php
 
$servername = "localhost";   
$username = "root";  
$password = "";   
$dbname = "uni_connect";   
 
$conn = new mysqli($servername, $username, $password, $dbname);

 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 
$sql = "SELECT id, email, name FROM users";  
$result = $conn->query($sql);

 
if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "No results found.";
}

$conn->close();  
?>
