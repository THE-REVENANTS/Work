<?php include 'header.php' ?>

<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // CONNECT TO DATABASE
    include 'config.php';

    // GET THE INPUT FROM THE USER
    $the_name = mysqli_real_escape_string($connect_to_database, $_POST['the_name']);;
    $the_image = mysqli_real_escape_string($connect_to_database, $_POST['the_image']);;
    $the_artist = mysqli_real_escape_string($connect_to_database, $_POST['the_artis']);;
    $the_website = mysqli_real_escape_string($connect_to_database, $_POST['the_website']);;
    $the_website = mysqli_real_escape_string($connect_to_database, $_POST['the_release_date']);;

    // INSERT THE DATA INTO THE SERVER (SQL)
    $sql = "INSERT INTO posters_data(movie_name,image_url,artist_name,artist_website)  VALUES ('$the_name', '$the_image','$the_artist','$the_website')";
    mysqli_query($connect_to_database, $sql);
    echo '<script>window.location.href = "https://cinemaposterart.com/home.php";</script>';
};
?>
<body id="add_page">
    <a href="home.php" class="back_home"><i class="fa-solid fa-house"></i></a>
    <form method="POST">
        <input type="text" required placeholder="Poster Name" name="the_name">
        <input type="text" required placeholder="Image Link" name="the_image">
        <input type="text" required placeholder="Artist Name" name="the_artis">
        <input type="text" required placeholder="Your Website" name="the_website">
        <input type="number" required placeholder="Release Date" name="the_release_date">
        <button>Submit</button>
    </form>
</body>
</html>