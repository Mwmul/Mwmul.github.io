<?php

// collect data

$Text1      = $_REQUEST['Text1'];
$Text2      = $_REQUEST['Text2'];
$Text3     = $_REQUEST['Text3'];
$Text4   = $_REQUEST['Text4'];
$Text5	 =$_REQUEST['Text5'];
$OffSpecGear       = $_REQUEST['checkbox1'];
$experiance     = $_REQUEST['checkbox2'];

$fields = array();
$fields{"Text1"} = "Text1";
$fields{"Text2"} = "Text2";
$fields{"Text3"} = "Text3";
$fields{"Text4"} = "TText4";
$fields{"Text5"} = "Text5";
$fields{"checkbox1"} = "checkbox1";
$fields{"checkbox2"} = "checkbox2";


// make email

$headers    = "Content-Type: text/plain; charset=iso-8859-1\n";

$headers    = "From: $name <$email>\n";

$recipient  = "martiniwells@yahoo.co.uk";

$subject    = "new 8/8 pilot";

$message    = "8/8 pilot"; foreach($fields as $a => $b){ $message .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

// send email

@mail($recipient, $subject, $message, $headers);
header('Location: index.php');

?>
