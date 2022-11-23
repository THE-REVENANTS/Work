<?php
$myemail = 'contact@mrmontasir.com';//<-----Put Your email address here.

    $type = $_POST['type']; 
    $first_name = $_POST['first_name']; 
    $name = $_POST['name'];  
    $email = $_POST['email'];  
    $phone = $_POST['phone'];  
    $message = $_POST['message']; 
    $consent = $_POST['consent'];

    $to = $myemail; 
    $email_subject = "Contact form submission received from SeSa FinProf contact form"; 
    $email_body = "Here are the details:\n".
    "Type: $type\n". 
    "First Name: $first_name \n". 
    "Name: $name\n". 
    "Email: $email\n". 
    "Phone: $phone\n".
    "Message: $message\n".
    "Phone: $phone\n";




$headers = "From: SeSa FinProf contact form\n"; 
$headers .= "Reply-To: $first_name"; 
mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
header('Location: /'); 
?>