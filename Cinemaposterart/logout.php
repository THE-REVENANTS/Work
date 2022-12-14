<?php include 'header.php'; ?>
<div class="success_message">Please Wait, We are logging you out!</div>
<?php
unset($_SESSION['username']);
unset($_SESSION['password']);
unset($_SESSION['email_confirmation']);
echo '<script>window.location.href = "https://cinemaposterart.com/home.php";</script>';
?>
<?php include 'footer.php'; ?>