<?php include '../../header.php' ?>
<?php include '../../config.php' ?>
<?php
if (isset($_SESSION["username"])) {
    $sql = "SELECT * FROM cinema_users WHERE username='{$_SESSION['username']}' ";
    $result = mysqli_query($connect_to_database,$sql);
    $user = mysqli_fetch_assoc($result);
    if ($user["email_confirmation"] == 0) {
        $sql_email_confirm = "UPDATE cinema_users SET email_confirmation=1 WHERE username='{$_SESSION['username']}'";
        $add_sql_email_confirm_to_db = mysqli_query($connect_to_database, $sql_email_confirm);
        echo '<script>window.location.href = "../profile";</script>';
    } else {
        echo '<script>window.location.href = "../profile";</script>';
    }
} else {
    echo '<script>window.location.href = "../profile";</script>';
}
?>
<?php include '../../footer.php'; ?>