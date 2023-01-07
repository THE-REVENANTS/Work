<?php include '../../config.php' ?>
<?php include '../../header.php' ?>
<?php
if (isset($_POST['submit_btn'])) {
    $new_password = $_POST['password'];
    $confirm_new_password = $_POST['confirm_password'];
    $user_email = $_SESSION['user_email'];
    if ($new_password == $confirm_new_password) {
        // update user password
        $sql = "UPDATE cinema_users ";
        $sql .= "SET password = '$new_password' WHERE email ='{$user_email}' ";
        $Update_Password = mysqli_query($connect_to_database, $sql);
        unset($_SESSION['reset_password_token']);
        unset($_SESSION['user_email']);
        echo '<script>window.location.href = "https://cinemaposterart.com/Account/sign-in/index.php?pass_reseted=true";</script>';
    } else {
        echo '<div class="error_message">PSSWORDS DOES NOT MATCH</div>';
    }
}
?>
<!-- About content -->
<main class="signin_main">
    <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS FOR <span class="white_color">FREE</span> </h1>
    <div class="from_container">
        <form method="POST">
            <!-- background image -->
            <img class="background" src="/assets/images/signin_bg.png" alt="Sign In Background">
            <!-- form title -->
            <h2>RESET PASSWORD</h2>
            <!-- form inputs -->
            <label>New Password <span>*</span></label>
            <input type="password" name="password" required>
            <label>Confirm New Password <span>*</span></label>
            <input type="password" name="confirm_password" required>
            <input name="submit_btn" type="submit" value="Submit">
        </form>
    </div>
</main>
<?php include '../../footer.php'; ?>