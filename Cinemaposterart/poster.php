<?php include 'header.php' ?>
<?php
include 'config.php';
if (isset($_GET['id'])) {
    // get id from the url
    $the_id = $_GET['id'];
    // get data from database
    $sql = "SELECT * FROM posters_data WHERE poster_id = $the_id";
    $poster = mysqli_query($connect_to_database, $sql);
    $poster_array = mysqli_fetch_assoc($poster);

    $current_views = $poster_array['poster_views'];
    $added_one_view = $current_views + 1;

    if (isset($_SESSION['username'])) {
        $sql_views = "UPDATE posters_data SET poster_views='$added_one_view' WHERE poster_id='{$poster_array['poster_id']}'";
        $add_view_to_db = mysqli_query($connect_to_database, $sql_views);
    }
} else {
    echo '<script>window.location.href = "https://cinemaposterart.com/home.php";</script>';
}
?>
    <!-- About content -->
    <main class="poster_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS <span class="white_color">FREE</span> FOR </h1>
        <form method="GET" action="search.php" >
            <?php $set_value = (isset($_GET['search'])? $_GET['search']:''); ?>
            <input type="search" placeholder="Start Searching" id="Search" name="search"
            value="<?php echo $set_value ;?>">
        </form>
        <h2>POSTER DETAIL</h2>
        <div class="poster_detail">
            <div class="left_info">
                <div class="title">Project</div>
                <div class="value_content"><?php echo $poster_array['movie_name']; ?></div> 
                <div class="title">Poster Views</div>
                <div class="value_content"><?php echo $added_one_view ?></div> 
                <div class="title">ARTIST</div>
                <div class="value_content"><?php echo $poster_array['artist_name']; ?></div> 
                <div class="title">WEBSITE</div>
                <a 
                 target="_blank" 
                 href="<?php echo 'https://' . $poster_array['artist_website']; ?>" 
                 class="value_content">
                    <?php echo 'www.' . $poster_array['artist_website']; ?>
                </a> 
                <div class="title">Tags</div>
                <div class="value_content">Ari Aster </div> 
                <div class="value_content">Drama</div> 
                <div class="value_content">Hereditary</div> 
                <div class="value_content">Horror</div> 
                <div class="value_content">Luca Testa</div> 
                <div class="value_content">Mystery</div> 
            </div>
            <div class="poster_img">
                <div class="poster_box">
                    <img src="<?php echo $poster_array['image_url']; ?>"> 
                </div>
                <div class="Icons">
                    <a href="#"> <img src="/assets/images/icons/heart.png" alt="Heart Icon"></a>
                    <a class="share-button"> <img src="/assets/images/icons/share.png" alt="Share Icon"> </a>
                    <a id="copy_to_clipboard"> <img src="/assets/images/icons/link.png" alt="Link Icon"> </a>
                    <a href="<?php echo $poster_array['image_url']; ?>" target="_blank"><img src="/assets/images/icons/download.png" alt="Download Icon"> </a>
                </div>
            </div>
        </div>
    </main>
    <script>
        // Share script
        var shareButton = document.querySelector(".share-button");
        const title = window.document.title;
        const url = window.document.location.href;
        shareButton.onclick = function () {
            if (navigator.share) {
                navigator.share({
                    title: `${title}` ,
                    url: `${url}`
                })
                .catch(console.error);
            }
        }
        let copyToClipboard = document.querySelector('#copy_to_clipboard');
        copyToClipboard.onclick = function () {
            navigator.clipboard.writeText(url);
            alert('Link Copied Succesfuly!')
        }
    </script>
<?php include 'footer.php'; ?>