<?php include '../../header.php' ?>
<?php include '../../config.php' ?>
<?php
if (!isset($_SESSION["username"])) {
    echo '<script>window.location.href = "../sign-in";</script>';
}
$sql = "SELECT * FROM cinema_users WHERE ( username='{$_SESSION['username']}' OR email = '{$_SESSION['username']}') ";
$result = mysqli_query($connect_to_database,$sql);
$user = mysqli_fetch_assoc($result);
?>

    <?php
        // Get the user uploads
        $user_id = $user['user_id'];
        $user_posters = "SELECT * FROM posters_data WHERE owner_id=$user_id  ";
        $user_posters_results = mysqli_query($connect_to_database,$user_posters);
    ?>

    <!-- About content -->
    <main class="artist_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS FOR <span class="white_color">FREE</span> </h1>
        <h2>Profile Page</h2>
        <div class="artist-info">
            <img src="/assets/images/ArtistBkgd.png" alt="" class="background">
            <h3 class="name"><?php echo $user['username']; ?></h3>
            <div class="columns">
                <span><?php echo $user['country']; ?></span>
                <span>Uploads: <?php echo mysqli_num_rows($user_posters_results); ?></span>
                <span><a target="_blank" href="https://<?php echo $user['website'];?>"><?php echo $user['website']; ?></a></span>
                <span>Downloads: 35,657</span>
            </div>
        </div>
        <?php if(mysqli_num_rows($user_posters_results) < 1 ) { ?>
            <div class="no_uploads_yet">
                <div class="no_uploads_heading">You dont have any uploads Yet :(</div>
                <a class="start_now_btn" href="../../upload">Start Uploading Now!</a>
            </div>
        <?php } ?>
        <!-- Gallery For Artist -->
        <div class="artist_gallery">
            <?php if(!mysqli_num_rows($user_posters_results) < 1 ) { ?>
                <?php while ($user_poster = mysqli_fetch_assoc($user_posters_results)) : ?>
                        <div class="poster_box">
                            <a href="/poster.php?id=<?php echo $user_poster['poster_id']; ?>">
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
<?php include '../../footer.php'; ?>