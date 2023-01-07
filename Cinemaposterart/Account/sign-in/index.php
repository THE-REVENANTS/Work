<?php include '../../config.php' ?>
<?php include '../../header.php' ?>
<?php
    if (isset($_POST['submit_btn'])) {
        $the_username_or_email = mysqli_real_escape_string($connect_to_database, $_POST['username_or_email']);
        $the_password = mysqli_real_escape_string($connect_to_database, $_POST['password']);
    
        $my_command = "SELECT * FROM cinema_users WHERE 
                      ( username='$the_username_or_email' OR email = '$the_username_or_email') 
                      && 
                      password='$the_password'";
    
        $result = mysqli_query($connect_to_database, $my_command);
        if (mysqli_num_rows($result)) {
            echo '<div class="success_message">You have successfuly Loged in!</div>';
            session_start();
            $_SESSION["username"] = $the_username_or_email;
            echo '<script>window.location.href = "https://cinemaposterart.com/Account/profile";</script>';
        } else {
            echo '<div class="error_message">Wrong Username or password! please try again </div>';
        }
    }
    if(isset($_SESSION['username'])) {
        echo '<script>window.location.href = "https://cinemaposterart.com/Account/profile";</script>';
    }
    if (isset($_GET['pass_reseted'])) {
        echo '<div class="success_message">PASSWORD SUCCESSFULY RESETED, you can now login with your new password!</div>';
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
                <h2>Sign In</h2>
                <!-- form inputs -->
                <label>EMAIL OR USERNAME <span>*</span></label>
                <input type="text" name="username_or_email" required>
                <label>PASSWORD <span>*</span></label>
                <input type="password" name="password" required>
                <label><a href="../forgot_password">Forgot Password?</a></label> 
                <input name="submit_btn" type="submit" value="SIGN IN">
            </form>
        </div>
    </main>
<?php include '../../footer.php'; ?>