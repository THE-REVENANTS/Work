<?php include '../header.php' ?>

    <!-- About content -->
    <main class="membership_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS FOR <span class="white_color">FREE</span> </h1>
        <h2>
            GO <span class="main-color">PRO</span> TO SELL YOUR WORK AND GROW YOUR <span class="main-color">FANBASE</span> 
        </h2>
        <div class="available_packs">
            <div class="pack free">
                <!-- image for background -->
                <img src="/assets/images/Left_pricing.png" alt="" class="background">
                <!-- Pack -->
                <h3 class="pack_name">FREE</h3>
                <ul class="features">
                    <li>full access to poster library </li>
                    <li>search all film titles </li>
                    <li>Basic filtering and edits or anything</li>
                    <li></li>
                </ul>
                <div class="price">
                    <span>$0</span> MONTH
                </div>
                <?php
                if (isset($_SESSION['username'])) {?>
                    <a class="button">Current</a>
                <?php } else {?>
                    <a href="/Account/sign-up" class="button">SIGN UP</a>
                <?php } ?>
            </div>
            <div class="pack pro">
                <!-- image for background -->
                <img src="/assets/images/Right_pricing.png" alt="" class="background">
                <!-- Pack -->
                <h3 class="pack_name">PRO</h3>
                <ul class="features">
                    <li>50 MONTHLY POSTER UPLOADS MINIMAL FILE RESTRICTIONS TAG FILTER </li>
                    <li>MINIMAL FILE RESTRICTIONS</li>
                    <li>TAG FILTER SITEWIDE</li>
                    <li>50 open poster requests</li>
                    <li>ARTIST SHOWCASE PAGE</li>
                    <li>ADVANCED DASHBORD</li>
                </ul>
                <div class="price">
                    <span>$4.99</span> MONTH
                </div>
                <?php 
                if (isset($_SESSION['username'])) {?>
                    <a href="/Account/pro-account/" class="button">Upgrade Now</a>
                <?php } else {?>
                    <a href="/Account/sign-up/" class="button">SIGN UP</a>
                <?php } ?>
            </div>
        </div>
    </main>
<?php include '../footer.php'; ?>