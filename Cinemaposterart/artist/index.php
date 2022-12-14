<?php include '../header.php' ?>
<?php
include '../config.php';
if (isset($_GET['user_id'])) {
    // get id from the url
    $the_artist_id = $_GET['user_id'];
    // get data from database
    $sql_artist = "SELECT * FROM cinema_users WHERE user_id = $the_artist_id";

    $artist_query = mysqli_query($connect_to_database, $sql_artist);
    $artist = mysqli_fetch_assoc($artist_query);
}
?>

    <?php
        // Get the user uploads
        $artist_id = $artist['user_id'];
        $artist_posters = "SELECT * FROM posters_data WHERE owner_id=$artist_id ";
        $artist_posters_results = mysqli_query($connect_to_database,$artist_posters);
    ?>
    <!-- About content -->
    <main class="artist_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS <span class="white_color">FREE</span> FOR </h1>
        <h2>ARTIST Page</h2>
        <div class="artist-info">
            <img src="/assets/images/ArtistBkgd.png" alt="" class="background">
            <h3 class="name"><?php echo $artist['username']; ?></h3>
            <div class="columns">
                <span><?php echo $artist['country']; ?></span>
                <span>Uploads: <?php echo mysqli_num_rows($artist_posters_results); ?></span>
                <span><a target="_blank" href="https://<?php echo $artist['website'];?>"><?php echo $artist['website']; ?></a></span>
                <span>Downloads: 35,657</span>
            </div>
        </div>
        <!-- Gallery For Artist -->
        <div class="artist_gallery">
            <?php if(!mysqli_num_rows($artist_posters_results) < 1 ) { ?>
                <?php while ($user_poster = mysqli_fetch_assoc($artist_posters_results)) : ?>
                        <div class="poster_box">
                            <a href="poster.php?id=<?php echo $user_poster['poster_id']; ?>">
                                <img  
                                src="<?php echo $user_poster['image_url']; ?>">
                            </a>
                            <div class="bottom">
                                <a href="/Account/sign-in" class="hint movie"><i class="fas fa-film"></i></a> 
                                <a 
                                href="<?php echo $user_poster['image_url']; ?>" 
                                target="_blank"
                                 class="hint download">
                                    <i class="fas fa-cloud-download-alt "></i>
                                </a> 
                                <a href="/Account/sign-in" class="hint heart"><i class="far fa-heart"></i></a>
                            </div>
                            <div class="top-left">
                                <span>
                                    <?php echo (date("Y") - $user_poster['release_date']); ?> Years 
                                    (<?php echo $user_poster['release_date']; ?>)
                                </span>
                                <span>
                                    By 
                                    <a href="/artist/">
                                        <?php echo $user_poster['artist_name']; ?>
                                    </a>
                                </span>
                            </div>
                            <div class="top-right">
                                <a class="hint number" href="/artist/">2</a>
                            </div>
                        </div>
                <?php endwhile; ?>
            <?php }?>
        </div>
    </main>
<?php include '../footer.php'; ?>