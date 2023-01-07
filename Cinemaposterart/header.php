<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CinemaPosterArt | Home</title>
    <!-- CSS link -->
    <link rel="stylesheet" href="/assets/css/main.css">
    <!-- favicon -->
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon">
    <!-- fontawesome link -->
    <script src="https://kit.fontawesome.com/38516d3f67.js" crossorigin="anonymous"></script>
    <!-- style of sitemap -->
    <style>
        main.sitemap {
            display: grid;
            grid-template-columns: repeat(3 , 1fr);
            padding: 100px 10%;
            margin:0 auto;
        }
        main.sitemap a{
            text-align: left;
            color: white;
        }
        @media (max-width:900px) {
            main.sitemap {
                grid-template-columns: 1fr 1fr;
            }
        }
    </style>
</head>
<body>
<?php
if(isset($_SESSION['username'])) :
    include 'config.php';
    $sql_user_header = "SELECT * FROM cinema_users WHERE ( username='{$_SESSION['username']}' OR email = '{$_SESSION['username']}') ";
    $result_user_header = mysqli_query($connect_to_database,$sql_user_header);
    $user_data_header = mysqli_fetch_assoc($result_user_header);
    if($user_data_header['email_confirmation'] == 0) { ?>
        <div class="not_confirmed_banner">
            Your email is not confirmed yet, check the message we sent to your email.
        </div>
    <?php }
endif; ?>
<?php
    include 'config.php';
    $sql_global_info = "SELECT * FROM global_infos WHERE row_id = 1 ";
    $result_global_info = mysqli_query($connect_to_database,$sql_global_info);
    $data_global_info = mysqli_fetch_assoc($result_global_info);
?>
<header>
    <div class="logo_container">
        <a href="/"> <img src="/assets/images/LogoHeader.png" alt="Header Logo"> </a>
        <span><?php echo number_format($data_global_info['total_posters']); ?>  unique movie posters and growing</span>
    </div>
    <i id="menu_icon" class="fa-solid fa-bars-staggered hide-desktop menu-icon"></i>
    <?php if(isset($_SESSION['username'])) { ?>
        <div id="header_menu" class="right close_menu">
            <a href="/membership/" class="upgrade">Upgrade To Pro Account</a>
            <a href="/logout.php">Logout</a>
            <a href="/upload">Upload</a>
            <a href="/Account/profile">Profile</a>
        </div>
    <?php } else { ?>
        <div id="header_menu" class="right close_menu">
            <a href="/membership/" class="upgrade">Upgrade To Pro Account</a>
            <a href="/Account/sign-up/">Sign Up</a>
            <a href="/Account/sign-in/">Sign In</a>
        </div>
    <?php } ?>
</header> 