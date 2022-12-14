<?php
    // Connect to server, and show connection status (connected or not)
    $connect_to_database = mysqli_connect('localhost' , 'bryanbow_cinemaposterart' , 'Cinemaposterart&1234' , 'bryanbow_posters');
    if (!$connect_to_database) {
        echo 'Could not connect to database  :(';
    }
?>