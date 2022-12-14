<?php include 'config.php'; ?>
<?php include 'header.php'; ?>
    <!-- Main Page content goes here -->
    <main>
        <form method="GET" action="search.php" >
            <?php $set_value = (isset($_GET['search'])? $_GET['search']:''); ?>
            <input type="search" placeholder="Start Searching" id="Search" name="search"
            value="<?php echo $set_value ;?>">
        </form>
        <h2>
            <!--  -->
            <?php echo (isset($_GET['search'])? 'Here are the results for your search: <span class="main-color">' . $_GET['search'] . '</span>':'TRY SEARCHING ANYTING IN THE FIELD ABOVE :)') ; ?> 
        </h2>
        <div class="gallery_container">
            <div class="gallery">
                <?php
            if (isset($_GET['search'])) {
                // Get the user input
                $user_search = $_GET['search'];
                // get data from database
                $sql = "SELECT * FROM posters_data WHERE movie_name like '%$user_search%' LIMIT 40";
                $poster = mysqli_query($connect_to_database, $sql);
                // write the artist name of the input the user entered
                if ($poster) {
                if (mysqli_num_rows($poster) > 0) {
                    while ($poster_array = mysqli_fetch_assoc($poster)) :?>
                        <div class="poster_box">
                        <a href="poster.php?id=<?php echo $poster_array['poster_id']; ?>">
                            <img  
                            src="<?php echo $poster_array['image_url']; ?>">
                        </a>
                        <div class="bottom">
                            <a href="/Account/sign-in" class="hint movie"><i class="fas fa-film"></i></a> 
                            <a href="/Account/sign-in" class="hint download"><i class="fas fa-cloud-download-alt "></i></a> 
                            <a href="/Account/sign-in" class="hint heart"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="top-left">
                            <span>
                                <?php echo (date("Y") - $poster_array['release_date']); ?> Years 
                                (<?php echo $poster_array['release_date']; ?>)
                            </span>
                            <span>
                                By 
                                <a href="/artist/">
                                    <?php echo $poster_array['artist_name']; ?>
                                </a>
                            </span>
                        </div>
                        <div class="top-right">
                            <a class="hint number" href="/artist/">2</a>
                        </div>
                    </div>
                    <?php endwhile;
                } else {
                    echo '<h3>NO POSTERS FOUND</h3>';
                }
                }
            }?>
            </div>
        </div>
    </main>
<?php include 'footer.php'; ?>