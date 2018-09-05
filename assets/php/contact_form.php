<?php

if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "benjamin.dally@icloud.com";

    $headers = "From: " .$emailFrom;

    $txt = "Ben,\n\nYou have recieved an email from your portfolio site. ".$name." would like to connect with you.\n\nMessage:\n".$message;

    mail($mailTo, $headers, $txt);

    header("Location: ../../index.html$mailsent");
    
}

