<!-- 46ee0999e1679f82c95fae6245f4c829 -->
<h1>TOP MOVIES FOR 2018</h1>
<?php

// Include the API key
$api_key = "46ee0999e1679f82c95fae6245f4c829";

// Make a request to the API to get the top 10 movies for 2018
$api_response = file_get_contents("https://api.themoviedb.org/3/discover/movie?api_key=" . $api_key . "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&vote_count.gte=1000");

// Decode the response into an associative array
$response_data = json_decode($api_response, true);

// Loop through the array of movies
foreach ($response_data['results'] as $movie) {
  // Print the movie title, release date, and image URL
  echo $movie['title'] . " (" . $movie['release_date'] . ")<br>";
  echo "<img src='https://image.tmdb.org/t/p/w500" . $movie['poster_path'] . "'><br><br>";
}

?>
