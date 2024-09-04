<?php
$hostName = "localhost";
$userName = "root";
$password = "";
$database = "eccormece";

$conn = new mysqli($hostName,$userName,$password,$database);
if ($conn->connect_error){
     die("Connection failed please try again: ".$conn->connect_error);
}

?>