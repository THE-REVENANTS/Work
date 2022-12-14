<?php
// session_start();
// include 'config.php';
// if (isset($_GET['id'])) {
    // get id from the url
    // $the_id = $_GET['id'];
    // get data from database
//     $sql = "SELECT * FROM posters_data WHERE poster_id = $the_id";
//     $poster = mysqli_query($connect_to_database, $sql);
//     $poster_array = mysqli_fetch_assoc($poster);

//     echo '<pre>';
//     print_r($poster_array);
//     echo '</pre>';

//     $current_likes = $poster_array['poster_likes'];
//     $added_one_like = $current_likes + 1;

//     if (isset($_SESSION['username'])) {
//         $sql_likes = "UPDATE posters_data SET poster_likes='$added_one_like' WHERE poster_id='{$poster_array['poster_id']}'";
//         $add_like_to_db = mysqli_query($connect_to_database, $sql_likes);
//         header('Location: home.php');
//     } else {
//         header('Location: account/sign-in');
//     }
// } else {
//     header('Location: home.php');
// }