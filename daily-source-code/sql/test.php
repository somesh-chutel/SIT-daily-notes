<?php



$server = "localhost";
$user = "root";
$pass = "";
$db = "z8";

$con  = mysqli_connect($server , $user , $pass , $db);

if(!$con){
	
	  die(" Connection Failed" . mysqli_connect_error() );
	
}

$sql = "INSERT INTO info(id , name) VALUES ($id , $name)";

if( mysqli_query($con , $sql) === TRUE ){
	
	echo "Record created Successfully";
	
}else{
	
	echo "Error while creating record" . mysqli_error($con);
}

mysqli_close($con);


?>