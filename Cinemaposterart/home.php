<?php include 'header.php' ?>
<?php
include 'config.php';
$table = 'SELECT * FROM posters_data LIMIT 10'; //Select a table
$my_data = mysqli_query($connect_to_database , $table);
$data_array = mysqli_fetch_all($my_data, MYSQLI_ASSOC);


?>
    <!-- Main Page content goes here -->
    <main>
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS FOR DOWNLOAD</h1>
        <form method="GET" action="search.php" >
            <?php $set_value = (isset($_GET['search'])? $_GET['search']:''); ?>
            <input type="search" placeholder="Start Searching" id="Search" name="search"
            value="<?php echo $set_value ;?>">
        </form>
        <h2>
            DOWNLOAD PRINTABLE ALTERNATIVE POSTERS FOR <span class="main-color">FREE</span> 
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa.
            <br>
            In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis..
        </p>
        <div class="gallery_container">
            <h3>New Arrivals <a href="" class="main-color">&nbsp; View All</a></h3>
            <div class="gallery">
                <?php foreach ($data_array as $poster ) :?>
                    <?php
                    
                    $sql_user = "SELECT * FROM cinema_users WHERE user_id='{$poster['owner_id']}'";
                    $result_user = mysqli_query($connect_to_database,$sql_user);
                    $user_data = mysqli_fetch_assoc($result_user);
                    
                    $sql_user_posters = "SELECT * FROM posters_data WHERE owner_id='{$user_data['user_id']}'";
                    $result_user_posters = mysqli_query($connect_to_database,$sql_user_posters);
                    $user_posters = mysqli_fetch_assoc($result_user_posters);
                    ?>
                    <div class="poster_box">
                        <a href="poster.php?id=<?php echo $poster['poster_id']; ?>">
                            <img src="<?php echo $poster['image_url']; ?>">
                        </a>
                        <div class="bottom">
                            <a href="/Account/sign-in" class="hint movie"><i class="fas fa-film"></i></a> 
                            <a 
                            href="<?php echo $poster['image_url']; ?>" 
                            target="_blank"
                             class="hint download">
                                <i class="fas fa-cloud-download-alt "></i>
                            </a> 
                            <!-- like button but with errors -->
                            <!-- <a href="like.php?id=<?php // echo $poster['poster_id']; ?>" class="hint heart"><i class="far fa-heart"></i></a> -->
                            <a href="account/sign-in" class="hint heart"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="top-left">
                            <span>
                                <?php echo (date("Y") - $poster['release_date']); ?> Years 
                                (<?php echo $poster['release_date']; ?>)
                            </span>
                            <span>
                                By 
                                <a href="/artist/index.php?user_id=<?php echo $user_data['user_id']; ?>">
                                    <?php echo $poster['artist_name']; ?>
                                </a>
                            </span>
                        </div>
                        <div class="top-right">
                            <a class="hint number" href="/artist/">
                                <?php echo mysqli_num_rows($result_user_posters); ?>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </main>

<?php include 'footer.php'; ?>