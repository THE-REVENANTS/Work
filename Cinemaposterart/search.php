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
                    // Include the API key
                    $api_key = "46ee0999e1679f82c95fae6245f4c829";
                    
                    // Get the search query from the form data
                    $query = $_GET['search'];
                    
                    // Make a request to the API to search for movies by title
                    $api_response = file_get_contents("https://api.themoviedb.org/3/search/movie?api_key=" . $api_key . "&language=en-US&query=" . urlencode($query));
                    
                    // Decode the response into an associative array
                    $response_data = json_decode($api_response, true);
                    
                    // Check if the response data contains any movies
                    if (count($response_data['results']) > 0) {
                      // Loop through the array of movies
                      foreach ($response_data['results'] as $movie) {
                        ?>
                        <div class="poster_box">
                            <a href="poster.php?tmdb_poster=<?php echo $movie['id'] ?>">
                            <img 
                            src="https://image.tmdb.org/t/p/w500<?php echo $movie['poster_path']; ?>">
                            </a>
                            <div class="bottom">
                                <a href="/Account/sign-in" class="hint movie"><i class="fas fa-film"></i></a> 
                                <a href="/Account/sign-in" class="hint download"><i class="fas fa-cloud-download-alt "></i></a> 
                                <a href="/Account/sign-in" class="hint heart"><i class="far fa-heart"></i></a>
                            </div>
                            <div class="top-left">
                                <span>
                                    <?php echo (date("Y") - date('Y', strtotime($movie['release_date']))); ?> Years 
                                    (<?php echo date('Y', strtotime($movie['release_date'])) ?>)
                                </span>
                                <span>
                                    By 
                                    <a href="https://www.themoviedb.org">
                                        TMDB
                                    </a>
                                </span>
                            </div>
                        </div>
                    <?php }
                    } else {
                      // No movies were found
                      echo '<h3>NO POSTERS FOUND</h3>';
                    }
                }
                }
            }?>
            </div>
        </div>
    </main>
<?php include 'footer.php'; ?>