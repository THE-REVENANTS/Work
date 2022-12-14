<?php include '../config.php' ?>
<?php include '../header.php' ?>

<?php
// Check if user logged in
if (isset($_SESSION['username'])) {
    $sql_user = "SELECT * FROM cinema_users WHERE ( username='{$_SESSION['username']}' OR email = '{$_SESSION['username']}') ";
    $result_user = mysqli_query($connect_to_database,$sql_user);
    $user = mysqli_fetch_assoc($result_user);
} else {
    echo '<script>window.location.href = "https://cinemaposterart.com/Account/sign-in";</script>';
}

// Get user data and insert it into the database
if (isset($_POST['submit_btn'])) {
    // Check if a file was uploaded
    if(isset($_FILES['uploaded_file'])){
        // Set the target directory for the file
        if (!is_dir('../Uploads/' . $user['username'] . '/')) {
            mkdir('../Uploads/' . $user['username'] . '/', 0777, true);
        }
        $upload_dir = '../Uploads/' . $user['username'] . '/';

        // Get the file information
        $name = $_FILES['uploaded_file']['name'];
        $tmp_name = $_FILES['uploaded_file']['tmp_name'];

        // Get the file extension
        $ext = pathinfo($name, PATHINFO_EXTENSION);

        // Generate a unique numeric identifier for the file
        do {
            $id = rand();
            $new_name = $id . '.' . $ext;
            $target_path = $upload_dir . $new_name;
        } while(file_exists($target_path));

        // Check the dimensions of the uploaded image
        $dimensions = getimagesize($tmp_name);
        $width = $dimensions[0];
        $height = $dimensions[1];

        // Check if the dimensions are within the desired range
        if($width > 1050 || $height > 700) {
            echo '<div class="error_message">Image is too large, Max: 700x1050 Pixels</div>';
        } else {
            if(move_uploaded_file($tmp_name, $target_path)){
                // If the file was successfully uploaded, generate the full URL to the file
                $protocol = strtolower(substr($_SERVER["SERVER_PROTOCOL"], 0, 5)) == 'https' ? 'https' : 'http';
                $url = $protocol . '://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] . $target_path;

                // GET THE INPUT FROM THE USER
                $the_name = $_POST['the_name'];
                $the_image = $url;
                $the_artist = $_POST['the_artist'];
                $the_website = $_POST['the_website'];
                $the_language = $_POST['the_language'];
                $the_variation = $_POST['variation'];
                $release_date = $_POST['release_date'];
                $variation = $_POST['variation'];
                $the_id = $_POST['the_id'];


                // INSERT THE DATA INTO THE SERVER (SQL)
                $sql = "INSERT INTO posters_data(poster_language,image_url,artist_name,artist_website,movie_name,release_date,owner_id, variation) VALUES ('$the_language','$the_image','$the_artist','$the_website','$the_name','$release_date','$the_id', '$the_variation')";
                mysqli_query($connect_to_database, $sql);


                // connect to global infos to update total posters
                $sql_global_info = "SELECT * FROM global_infos WHERE row_id = 1 ";
                $result_global_info = mysqli_query($connect_to_database,$sql_global_info);
                $data_global_info = mysqli_fetch_assoc($result_global_info);
                // Update total posters
                $added_one_poster = $data_global_info['total_posters'] + 1;
                $update_total_posters = "UPDATE global_infos SET total_posters='$added_one_poster' WHERE row_id = 1 ";
                mysqli_query($connect_to_database, $update_total_posters);

                // Redirect the user to His/Her profile
                echo '<script>window.location.href = "https://cinemaposterart.com/Account/profile";</script>';
            } else {
                // If the file was not successfully uploaded, display an error message
                echo '<p>There was an error uploading the file. Please try again.</p>';
            }
        }        
    }
};

$user_sql = "SELECT * FROM cinema_users WHERE ( username='{$_SESSION['username']}' OR email = '{$_SESSION['username']}') and password='{$user['password']}' ";
$user_results = mysqli_query($connect_to_database,$user_sql);
$user = mysqli_fetch_assoc($user_results);
?>


    <!-- About content -->
    <main class="upload_main">
        <h2>Upload New Poster As <span class="main-color"><?php echo $user['username']; ?></span></h2>
        <form method="POST" enctype='multipart/form-data'>
            <h3>Poster Info</h3>
            <div class="inputs">
                <div class="element">
                    <label>Upload Image (Max 700x1050) *</label>
                    <input required type="file" name="uploaded_file">
                </div>
                <div class="element">
                    <label>Poster Title *</label>
                    <input required type="text" name="the_name">
                </div>
                <div class="element">
                    <label>Poster Language *</label>
                    <select name="the_language" required>
                        <option value="">Select Language</option>
                        <option value="af">Afrikaans</option>
                        <option value="sq">Albanian - shqip</option>
                        <option value="am">Amharic - ????????????</option>
                        <option value="ar">Arabic - ??????????????</option>
                        <option value="an">Aragonese - aragon??s</option>
                        <option value="hy">Armenian - ??????????????</option>
                        <option value="ast">Asturian - asturianu</option>
                        <option value="az">Azerbaijani - az??rbaycan dili</option>
                        <option value="eu">Basque - euskara</option>
                        <option value="be">Belarusian - ????????????????????</option>
                        <option value="bn">Bengali - ???????????????</option>
                        <option value="bs">Bosnian - bosanski</option>
                        <option value="br">Breton - brezhoneg</option>
                        <option value="bg">Bulgarian - ??????????????????</option>
                        <option value="ca">Catalan - catal??</option>
                        <option value="ckb">Central Kurdish - ?????????? (???????????????? ????????????)</option>
                        <option value="zh">Chinese - ??????</option>
                        <option value="zh-HK">Chinese (Hong Kong) - ??????????????????</option>
                        <option value="zh-CN">Chinese (Simplified) - ??????????????????</option>
                        <option value="zh-TW">Chinese (Traditional) - ??????????????????</option>
                        <option value="co">Corsican</option>
                        <option value="hr">Croatian - hrvatski</option>
                        <option value="cs">Czech - ??e??tina</option>
                        <option value="da">Danish - dansk</option>
                        <option value="nl">Dutch - Nederlands</option>
                        <option value="en">English</option>
                        <option value="en-AU">English (Australia)</option>
                        <option value="en-CA">English (Canada)</option>
                        <option value="en-IN">English (India)</option>
                        <option value="en-NZ">English (New Zealand)</option>
                        <option value="en-ZA">English (South Africa)</option>
                        <option value="en-GB">English (United Kingdom)</option>
                        <option value="en-US">English (United States)</option>
                        <option value="eo">Esperanto - esperanto</option>
                        <option value="et">Estonian - eesti</option>
                        <option value="fo">Faroese - f??royskt</option>
                        <option value="fil">Filipino</option>
                        <option value="fi">Finnish - suomi</option>
                        <option value="fr">French - fran??ais</option>
                        <option value="fr-CA">French (Canada) - fran??ais (Canada)</option>
                        <option value="fr-FR">French (France) - fran??ais (France)</option>
                        <option value="fr-CH">French (Switzerland) - fran??ais (Suisse)</option>
                        <option value="gl">Galician - galego</option>
                        <option value="ka">Georgian - ?????????????????????</option>
                        <option value="de">German - Deutsch</option>
                        <option value="de-AT">German (Austria) - Deutsch (??sterreich)</option>
                        <option value="de-DE">German (Germany) - Deutsch (Deutschland)</option>
                        <option value="de-LI">German (Liechtenstein) - Deutsch (Liechtenstein)</option>
                        <option value="de-CH">German (Switzerland) - Deutsch (Schweiz)</option>
                        <option value="el">Greek - ????????????????</option>
                        <option value="gn">Guarani</option>
                        <option value="gu">Gujarati - ?????????????????????</option>
                        <option value="ha">Hausa</option>
                        <option value="haw">Hawaiian - ????lelo Hawai??i</option>
                        <option value="he">Hebrew - ??????????</option>
                        <option value="hi">Hindi - ??????????????????</option>
                        <option value="hu">Hungarian - magyar</option>
                        <option value="is">Icelandic - ??slenska</option>
                        <option value="id">Indonesian - Indonesia</option>
                        <option value="ia">Interlingua</option>
                        <option value="ga">Irish - Gaeilge</option>
                        <option value="it">Italian - italiano</option>
                        <option value="it-IT">Italian (Italy) - italiano (Italia)</option>
                        <option value="it-CH">Italian (Switzerland) - italiano (Svizzera)</option>
                        <option value="ja">Japanese - ?????????</option>
                        <option value="kn">Kannada - ???????????????</option>
                        <option value="kk">Kazakh - ?????????? ????????</option>
                        <option value="km">Khmer - ???????????????</option>
                        <option value="ko">Korean - ?????????</option>
                        <option value="ku">Kurdish - Kurd??</option>
                        <option value="ky">Kyrgyz - ????????????????</option>
                        <option value="lo">Lao - ?????????</option>
                        <option value="la">Latin</option>
                        <option value="lv">Latvian - latvie??u</option>
                        <option value="ln">Lingala - ling??la</option>
                        <option value="lt">Lithuanian - lietuvi??</option>
                        <option value="mk">Macedonian - ????????????????????</option>
                        <option value="ms">Malay - Bahasa Melayu</option>
                        <option value="ml">Malayalam - ??????????????????</option>
                        <option value="mt">Maltese - Malti</option>
                        <option value="mr">Marathi - ???????????????</option>
                        <option value="mn">Mongolian - ????????????</option>
                        <option value="ne">Nepali - ??????????????????</option>
                        <option value="no">Norwegian - norsk</option>
                        <option value="nb">Norwegian Bokm??l - norsk bokm??l</option>
                        <option value="nn">Norwegian Nynorsk - nynorsk</option>
                        <option value="oc">Occitan</option>
                        <option value="or">Oriya - ???????????????</option>
                        <option value="om">Oromo - Oromoo</option>
                        <option value="ps">Pashto - ????????</option>
                        <option value="fa">Persian - ??????????</option>
                        <option value="pl">Polish - polski</option>
                        <option value="pt">Portuguese - portugu??s</option>
                        <option value="pt-BR">Portuguese (Brazil) - portugu??s (Brasil)</option>
                        <option value="pt-PT">Portuguese (Portugal) - portugu??s (Portugal)</option>
                        <option value="pa">Punjabi - ??????????????????</option>
                        <option value="qu">Quechua</option>
                        <option value="ro">Romanian - rom??n??</option>
                        <option value="mo">Romanian (Moldova) - rom??n?? (Moldova)</option>
                        <option value="rm">Romansh - rumantsch</option>
                        <option value="ru">Russian - ??????????????</option>
                        <option value="gd">Scottish Gaelic</option>
                        <option value="sr">Serbian - ????????????</option>
                        <option value="sh">Serbo-Croatian - Srpskohrvatski</option>
                        <option value="sn">Shona - chiShona</option>
                        <option value="sd">Sindhi</option>
                        <option value="si">Sinhala - ???????????????</option>
                        <option value="sk">Slovak - sloven??ina</option>
                        <option value="sl">Slovenian - sloven????ina</option>
                        <option value="so">Somali - Soomaali</option>
                        <option value="st">Southern Sotho</option>
                        <option value="es">Spanish - espa??ol</option>
                        <option value="es-AR">Spanish (Argentina) - espa??ol (Argentina)</option>
                        <option value="es-419">Spanish (Latin America) - espa??ol (Latinoam??rica)</option>
                        <option value="es-MX">Spanish (Mexico) - espa??ol (M??xico)</option>
                        <option value="es-ES">Spanish (Spain) - espa??ol (Espa??a)</option>
                        <option value="es-US">Spanish (United States) - espa??ol (Estados Unidos)</option>
                        <option value="su">Sundanese</option>
                        <option value="sw">Swahili - Kiswahili</option>
                        <option value="sv">Swedish - svenska</option>
                        <option value="tg">Tajik - ????????????</option>
                        <option value="ta">Tamil - ???????????????</option>
                        <option value="tt">Tatar</option>
                        <option value="te">Telugu - ??????????????????</option>
                        <option value="th">Thai - ?????????</option>
                        <option value="ti">Tigrinya - ????????????</option>
                        <option value="to">Tongan - lea fakatonga</option>
                        <option value="tr">Turkish - T??rk??e</option>
                        <option value="tk">Turkmen</option>
                        <option value="tw">Twi</option>
                        <option value="uk">Ukrainian - ????????????????????</option>
                        <option value="ur">Urdu - ????????</option>
                        <option value="ug">Uyghur</option>
                        <option value="uz">Uzbek - o???zbek</option>
                        <option value="vi">Vietnamese - Ti???ng Vi???t</option>
                        <option value="wa">Walloon - wa</option>
                        <option value="cy">Welsh - Cymraeg</option>
                        <option value="fy">Western Frisian</option>
                        <option value="xh">Xhosa</option>
                        <option value="yi">Yiddish</option>
                        <option value="yo">Yoruba - ??d?? Yor??b??</option>
                        <option value="zu">Zulu - isiZulu</option>
                    </select>
                </div>
                <div class="element">
                    <label>Poster Variation *</label>
                    <select name="variation" required>
                        <option value="orig" >Original</option>
                        <option value="acg">Alternate Colour Grading</option>
                        <option value="dir_cut">Director's Cut</option>
                        <option value="edt_cut">Editor's Cut</option>
                        <option value="ext_cut">Extended Cut</option>
                        <option value="fan_edt">Fan Edit</option>
                        <option value="fin_cut">Final Cut</option>
                        <option value="rem">Remastered</option>
                        <option value="sp_ed">Special Edition</option>
                        <option value="th_cut">Theatrical Cut</option>
                        <option value="unc">Uncut</option>
                        <option value="unr">Unrated</option>
                        <option value="wpt_edt">Workprint Edition</option>
                    </select>
                </div>
                <div class="element">
                    <label>Poster Year *</label>
                    <input  type="number" min="1000" max="2022" name="release_date">
                </div>
                <input type="hidden" value="<?php echo $user['username']; ?>" name="the_artist">
                <input type="hidden" value="<?php echo $user['website']; ?>" name="the_website">
                <input type="hidden" value="<?php echo $user['user_id']; ?>" name="the_id">
                <input name="submit_btn" type="submit" value="Upload Poster">
            </div>
        </form>
    </main>
<?php include '../footer.php'; ?>