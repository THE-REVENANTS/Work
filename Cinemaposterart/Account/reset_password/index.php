<?php session_start(); ?>

<?php
    if ($_SESSION['reset_password_token'] == $_GET['reset_token']) {
        include 'form.php';
    } else {
        echo 'something wrong!';
    }
?>