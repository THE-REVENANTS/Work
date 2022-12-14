<?php include '../header.php' ?>

    <!-- About content -->
    <main class="membership_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS <span class="white_color">FREE</span> FOR </h1>
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
                    <li>full access to poster library</li>
                    <li>50 monthly poster uploads</li>
                    <li>Maximum 5MB file size on individual files</li>
                    <li>Customized poster feed</li>
                    <li>Basic dashboard</li>
                    <li>Basic filtering options</li>
                    <li>Basic notifications</li>
                    <li>5 open poster requests</li>
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
                    <li> monthly poster uploads</li>
                    <li>MINIMAL file restrictions</li>
                    <li>Advanced filters site wide</li>
                    <li>Save for later</li>
                    <li>50 open poster requests</li>
                    <li>User bio</li>
                    <li>Advanced dashboard</li>
                    <li>Fully customizable notifications</li>
                    <li>Profile searching</li>
                    <li>Dedicated showcase page</li>
                </ul>
                <div class="price">
                    <span>$9.99</span> MONTH
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