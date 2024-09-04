<?php
include "./config/db_config.php";
if (isset($_POST["username"])){
     $email = $conn->real_escape_string($_POST["email"]);
     $userName = $conn->real_escape_string($_POST["username"]);
     $contact = $conn->real_escape_string($_POST["contact"]);
     $home = $conn->real_escape_string($_POST["home"]);
     $password = $conn->real_escape_string($_POST["password"]);
     $image = $conn->real_escape_string($_FILES["profpic"]);

     class register {
          private $email;
          private $name;
          private $phone;
          private $locus;
          private $lock;
          private $image;
          public __constructor(){

          } private function setUserCredentials(){

          }
     }
     $user = new register($email,$userName,$contact,$home,$password,$image);
} else {
     header("location: http://localhost/eccormerce/signup.html");
}

$conn->close();
?>