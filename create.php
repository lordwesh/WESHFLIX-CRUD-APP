<?php

//create record function

function createRecord(){
  
  $servername = 'localhost';
  $username = 'root';
  $password = '';
  $databasename = 'movieflix_database';


  //creating a connection to the database

  $connection = mysqli_connect($servername, $username, $password, $databasename);
  
  //check if connection was succesful

  if(!$connection){
    die ('Connection unsuccessful :'.mysqli_connect_error());
  }else{
    echo 'Connection success!';
  }


//storing userinput into variables

$movieTitle = $_POST['create-title'];
$movieGenre = $_POST['create-genre'];
$movieDirector = $_POST['create-director'];

//Attempting to INSERT Data into our table

$sql = "INSERT INTO movieflix_table (title, genre, director) VALUES ('$movieTitle', '$movieGenre', '$movieDirector')";

//check if inserting data was successful

if(mysqli_query($connection, $sql)){
  echo '';
}else{
  echo 'Error: '.$sql.mysqli_error($connection);
}

//Close connection
mysqli_close($connection);

//Redirecting the user back to the main page index.php
header('location: index.php');

}


    if(isset($_POST['create-button'])){
      createRecord();
    }


?>
