<?php include '../../header.php' ?>

    <!-- About content -->
    <main class="pro_account_main">
        <h1>THE WORLD’S LARGEST CURATED ALTERNATIVE MOVIE POSTERS FOR <span class="white_color">FREE</span> </h1>
        <form onsubmit="event.preventDefault();" id="UpgradeProForm">
            <h3>PRO ACCOUNT</h3>
            <h4>BILLING DETAILS</h4>
            <div class="inputs">
                <div class="element">
                    <label>NAME ON CARD *</label>
                    <input required type="text" name="NAME ON CARD">
                </div>
                <div class="element">
                    <label>Card NUMBER *</label>
                    <input required type="text" id="cc_2" value="" name="CARD NUMBER" placeholder="1234 1234 1234 1234" onkeypress="return checkDigit(event)" minlength="16">
                    <span>Powered By <a target="_blank" href="https://stripe.com/">STRIPE</a></span>
                </div>
                <input type="submit" value="SUBMIT">
            </div>
        </form>
        <!-- go pro features -->
        <div class="go_pro_features">
            <div class="left">
                <h4>
                    GO PRO
                    <span>only $9.99 /  Month</span>
                </h4>
                <img src="/assets/images/HandBlue.png" alt="">
            </div>
            <div class="right">
                <div class="list">
                    <div class="feature">monthly poster uploads</div>
                    <div class="feature">MINIMAL file restrictions</div>
                    <div class="feature">Advanced filters site wide</div>
                    <div class="feature">Save for later</div>
                    <div class="feature">50 open poster requests</div>
                    <div class="feature">User bio</div>
                    <div class="feature">Advanced dashboard</div>
                    <div class="feature">Fully customizable notifications</div>
                    <div class="feature">Profile searching</div>
                    <div class="feature">Dedicated showcase page</div>
                </div>
            </div>
        </div>
    </main>
    <div id="checkout">
        <form action="/">
            <div class="form_header">
                <img src="/assets/images/LogoHeader.png" alt="logo" class="logo">
                <h5>PRO ACCOUNT</h5>
            </div>
            <div class="inputs_container">
                <div class="element">
                    <label for="">Email</label>
                    <input required placeholder="Enter Email" type="email" name="email" id="">
                </div>
                <div class="element">
                    <label for="">Card Information</label>
                    <div class="input_container">
                        <input required  id="cc" value="" placeholder="1234 1234 1234 1234" onkeypress="return checkDigit(event)">
                        <div class="cards">
                            <img src="https://cdn-icons-png.flaticon.com/24/349/349221.png">
                            <img src="https://cdn-icons-png.flaticon.com/24/147/147258.png">
                            <img src="https://cdn-icons-png.flaticon.com/24/893/893081.png">
                            <img src="/assets/images/mastercard.png">
                        </div>
                    </div>
                    <div class="two_inputs">
                        <input required  type="number" placeholder="MM / YY" maxlength="4">
                        <input required  type="number" placeholder="CVC" maxlength="3">
                    </div>
                </div>
                <div class="element">
                    <label for="">Name On card</label>
                    <input required  placeholder="Name On card" id="">
                </div>
                <div class="element">
                    <label for="">Country or Region</label>
                    <select required  name="region" id="">
                        <option value="">Select Country Or Region..</option>
                        <option value="">United States</option>
                        <option value="">United Kingdom</option>
                    </select>
                    <input required  placeholder="ZIP" id="zip">
                </div>
                <input type="submit" value="$ 9.99">
            </div>
        </form>
    </div>
<?php include '../../footer.php'; ?>