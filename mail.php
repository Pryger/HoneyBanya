<?php

$recepient = "";
$siteName = "HoneyBanya";

if ( !empty($_POST)) {
    if (isset($_POST['name']) && isset($_POST['phone'])) {

		$name = trim($_POST["name"]);
        $email = trim($_POST["phone"]);

		$message = "Имя: $name \nТелефон: $email";
		
		$pagetitle = "Заявка с сайта \"$siteName\"";
		mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

    } else if (isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_phone']) && isset($_POST['contact_message'])) {
    	
        $contact_name = $_POST['contact_name'];
		$contact_email = $_POST['contact_email'];
		$contact_phone = $_POST['contact_phone'];
		$contact_message = $_POST['contact_message'];
		
        $message = "Имя: $contact_name \nПочта: $contact_email \nТелефон: $contact_phone \nСообщение: $contact_message";

		$pagetitle = "Заявка с сайта \"$siteName\"";
		mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
    }   
}

?>