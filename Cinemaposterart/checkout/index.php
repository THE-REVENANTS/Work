<?php include '../header.php' ?>
<div id="checkout_page">
    <!-- font for checkout -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <!-- About content -->
    <div id="checkout_popup">
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
                <div class="note">
                    <i class="fa-solid fa-rotate-left"></i>
                    Free returns and exchanges
                </div>
                <input type="submit" value="$ 9.99">
            </div>
        </form>
    </div>
</div>
<?php include '../footer.php'; ?>
