<?php
$myemail = 'contact@mrmontasir.com';//<-----Put Your email address here.

    $email = $_POST['email'];  
    $i_am = $_POST['i_am'];  

    $to = $myemail; 
    $email_subject = "Newsletter form submission received from SeSa FinProf website"; 
    $email_body = "Here are the details:\n\n".
    "Email: $email \n". 
    "I am: $i_am\n";




$headers = "From: SeSa FinProf newsletter form\n"; 
$headers .= "Reply-To: $email"; 
mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
header('Location: /'); 
?>