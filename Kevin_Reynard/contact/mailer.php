<?php
$receiver = 'justin@drinkdam.com';
$host = 'smtpout.secureserver.net';
$port = 465;
$password = 'Nymets0703!';
$sender_name = 'Test';
$sender = 'justin@drinkdam.com';

use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = $host;
$mail->Port = $port;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Username = $sender;
$mail->Password = $password;
$mail->setFrom($sender, $sender_name);
$mail->addReplyTo($sender, $sender_name);
$mail->addAddress($receiver, 'mountassir selmani');
$mail->Subject = 'Email Test received.';
$mail->Body = '';
$mail->msgHTML(file_get_contents('message.html'), __DIR__);
//$mail->addAttachment('attachment.txt');
if (!$mail->send()) {
    echo $mail->ErrorInfoEmail;
} else {
    echo 'Message sent :)';
}