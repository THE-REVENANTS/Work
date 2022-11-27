<?php
$errors = '';
$myemail = 'Ouzerilimanaki@gmail.com';//<-----Put Your email address here.
if(empty($_POST['Email'])  ||
   empty($_POST['Message']));
$theEmail = $_POST['Email']; 
$Message = $_POST['Message'];  
?>
<?php  
$to = $myemail; 
$email_subject = "Contact form submission:"; 
$email_body = "You have received a form submission. ". 
"Here are the details:\nEmail: $theEmail \n". 
"Message: $Message\n"; 
$headers = "From: $theEmail"; 
mail($to,$email_subject,$email_body,$headers);
header('Location: index.html'); 
?>