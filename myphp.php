<html>
<head>

<title>QUIZ</title>



<link rel="stylesheet" type="text/css" href="style.css">





</head>

<body>


<?php

$servername = "localhost";
$username = "ask1_user";
$password = "ask1_password";
$dbname = "questions";


$conn = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



if (!mysqli_set_charset($conn, "utf8")) {
    printf("Error loading character set utf8: %s\n", mysqli_error($conn));
} else {
     mysqli_character_set_name($conn);
}


$query = 'SELECT DISTINCT id,question,answers,correct FROM queries order by RAND() LIMIT 6 '; 
$result = mysqli_query($conn, $query); 
$a=1;
while ($row = mysqli_fetch_array($result, MYSQLI_NUM)){
	$arr= explode(",",$row[2]);
	$idname = "id$a" ;
	
    echo '<fieldset id="'.$idname.'"><legend> Question' .$a. '</legend> ' .$row[1]. '<br/>' ;
	echo '<label><input class="Checkbox" type="radio" name="name" value="'.$row[3].'1"/>' . $arr[0] .'</label><br/>';
	echo '<label><input class="Checkbox" type="radio" name="name" value="'.$row[3].'2"/>' .$arr[1] .'</label><br/>';
	echo '<label><input class="Checkbox"  type="radio" name="name" value="'.$row[3].'3"/>' .$arr[2] .'</label><br/>';
	echo '<label><input class="Checkbox" type="radio" name="name" value="'.$row[3].'4"/>'. $arr[3] .'</label><br/>';
	
	echo '</fieldset> ' ;
	$a=$a+1;
}	 
?> 



<button type="button" id="submit" >Submit</button>;
<div id="time">  00:00 </div>
<div id="result">  </div>
<input type="image" src="restart.png"  id="restart" />
<input type="image" src="quiz-button.png"  id="quiz" />
















<script src="script.js"></script>
</body>
</html>






















