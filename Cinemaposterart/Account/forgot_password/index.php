<?php session_start(); ?>
<?php include '../../config.php' ?>
<?php include '../../header.php' ?>
<?php use PHPMailer\PHPMailer\PHPMailer; ?>
<?php
$random_number = rand ( 10000 , 99999 );
?>

<?php
    if (isset($_POST['submit_btn'])) {
        $user_email = $_POST['email'];

        require 'vendor/autoload.php';
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Host = 'mail.cinemaposterart.com';
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'ssl';
        $mail->Username = 'hello@cinemaposterart.com';
        $mail->Password = 'Cpa2023!!!';
        $mail->setFrom('hello@cinemaposterart.com', 'Cinemaposterart');
        $mail->addReplyTo('hello@cinemaposterart.com', 'Cinemaposterart');
        $mail->addAddress($user_email);
        $mail->Subject = 'Password reset request.';
        $mail->IsHTML(true); 
        $mail->Body = '
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cinemaposterart Password Reset</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    .confirm_email {
                        width: 100%;
                        background: #fbfaf9;
                        color: black;
                        padding: 30px 5%;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid #012f94;
                        border-radius: 10px;
                    }
                    h1 {
                        color: #012f94;
                        padding-bottom: 15px;
                    }
                    p {
                        font-size: 15px;
                        color: gray;
                    }
                    .button {
                        border-radius: 5px;
                        padding: 8px 10px;
                        color: white !important;
                        background: #012f94;
                        text-decoration: none;
                    }
                </style> 
            </head>
            <body>
                <div class="confirm_email">
                    <h1>Cinemaposterart: Reset Password Request</h1>
                    <p>To reset your password, click the link down below and you will be redirected to a page where you can enter your new password</p>
                    <br>
                    <a href="https://cinemaposterart.com/Account/reset_password?reset_token=' . $random_number . '" class="button">RESET PASSWORD</a>
                </div>
            </body>
        </html>';
        if ($mail->send()) {
            // pass token via session
            $_SESSION['reset_password_token'] = $random_number;
            $_SESSION['user_email'] = $user_email;
            // show success message
            echo '<div class="success_message">
                    You received a reset password link, check your email ' . $user_email . '
                  </div>';
        } else {
            echo '<div class="error_message">Something went wrong, try again or try contacting support!</div>';
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
                <h2>Forgot Password</h2>
                <!-- form inputs -->
                <label>EMAIL <span>*</span></label>
                <input type="email" name="email" required> 
                <input name="submit_btn" type="submit" value="REQUEST RESET PASSWORD">
            </form>
        </div>
    </main>
<?php include '../../footer.php'; ?>