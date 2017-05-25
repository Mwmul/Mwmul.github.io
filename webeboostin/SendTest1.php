<?php
	
$Text1 = $_POST['Text1'];
$Text2 = $_POST['Text2'];
$Text3 = $_POST['Text3'];
$Text4 = $_POST['Text4'];
$Text5 = $_POST['Text5'];
$checkbox1 = $_POST['checkbox1'];
$checkbox2 = $_POST['checkbox2'];

$to = "martiniwells@yahoo.co.uk";
$subject = "New Selfplay CM run order";
$body = "New order!"

mail ($to,$ubject,$body);

echo "Thankyou for your order, We will contact you soon! <a href='index.php'> Click here to return </a>

?>