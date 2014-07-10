(function(){
    var username = document.querySelector("#f_username");
    var email = document.querySelector("#f_email");
    var phone = document.querySelector("#f_phone");
    var password = document.querySelector("#f_password");
    var social = document.querySelector("#f_ssn");

    var usernameError = document.querySelector("#f_username_error");
    var emailError = document.querySelector("#f_email_error");
    var phoneError = document.querySelector("#f_phone_error");
    var passwordError = document.querySelector("#f_password_error");
    var socialError = document.querySelector("#f_ssn_error");

    var basicBorder = "outline: 0; -webkit-box-shadow: none; box-shadow: none;";
    var blackBorder = "border: 1px solid #000000; outline: 0; -webkit-box-shadow: none; box-shadow: none;";
    var greenBorder = "border: 1px solid #33CC33; outline: 0; -webkit-box-shadow: none; box-shadow: none;";
    var redBorder = "border: 1px solid #CC0000; outline: 0; -webkit-box-shadow: none; box-shadow: none;";

    var regexp = {
        username: /^\w{3,15}$/,
        email: /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/,
        phone: /^1?[-\. ]?(\(\d{3}\)?[-\. ]?|\d{3}?[-\. ]?)?\d{3}?[-\. ]?\d{4}$/,
        social: /\b(?!000)(?!666)(?!9)[0-9]{3}[ -]?(?!00)[0-9]{2}[ -]?(?!0000)[0-9]{4}\b/
    };

    addListeners();

    function onSubmit(event) {
        removeStyle();
        event.preventDefault();
        return validate();
    }

    function validate() {
        if(updateUsername() == true && updateEmail() == true && updatePassword() == true && updatePhone() == true && updateSocial() == true){
            removeListeners();
            if(phone.value == ""){
                phone.value = "Not Provided";
            }

            if(social.value == ""){
                social.value = "Not Provided";
            }

            document.querySelector("#dss").innerHTML = "" +
                "<h1 class=\"dssheader\">Thank you!</h1><br />" +
                "<p>We have received your information and will contact you soon.</p><br />" +
                "<p><b>Please keep a copy for your records:</b></p><br />" +
                "<p><b>Username:</b> " + username.value + "<br />" +
                "<b>Email:</b> " + email.value + "<br />" +
                "<b>Password:</b> " + password.value + "<br />" +
                "<b>Phone:</b> " + phone.value + "<br />" +
                "<b>SSN:</b> " + social.value + "</p>";

            return true;
        }else{
            if(updateUsername() == false){
                usernameError.setAttribute("style", "display: inline;");
            }
            if(updateEmail() == false){
                emailError.setAttribute("style", "display: inline;");
            }
            if(updatePassword() == false){
                passwordError.setAttribute("style", "display: inline;");
            }
            if(updatePhone() == false){
                phoneError.setAttribute("style", "display: inline;");
            }
            if(updateSocial() == false){
                socialError.setAttribute("style", "display: inline;");
            }
            return false;
        }
    }

    function updateUsername() {
        if(username.value == ""){
            username.setAttribute("style",basicBorder);
            return false;
        }else if(regexp.username.test(username.value)){
            usernameError.removeAttribute("style");
            username.setAttribute("style",greenBorder);
            return true;
        }else if(!regexp.username.test(username.value)){
            username.setAttribute("style",redBorder);
            return false;
        }
    }

    function updateEmail() {
        if(email.value == ""){
            email.setAttribute("style",basicBorder);
            return false;
        }else if(regexp.email.test(email.value)){
            emailError.removeAttribute("style");
            email.setAttribute("style",greenBorder);
            return true;
        }else if(!regexp.email.test(email.value)){
            email.setAttribute("style",redBorder);
            return false;
        }
    }

    function updatePassword() {
        if(password.value == "") {
            password.setAttribute("style",blackBorder);
            passwordError.setAttribute("style", "display: inline;");
            passwordError.innerHTML = "Your password is required.";
        }else if(checkPassStrength(password.value) == ""){
            password.setAttribute("style",redBorder);
            passwordError.setAttribute("style", "display: inline;");
            passwordError.innerHTML = "Your password is too simple.";
            return false;
        }else if(checkPassStrength(password.value) == "Strong"){
            passwordError.removeAttribute("style");
            password.setAttribute("style",greenBorder);
            passwordError.setAttribute("style", "display: inline;");
            passwordError.innerHTML = "<span style=\"color: #000000;\">Strength:</span> <span style=\"color: #33CC33;\">Strong</span>";
            return true;
        }else if(checkPassStrength(password.value) == "Good"){
            passwordError.removeAttribute("style");
            password.setAttribute("style",greenBorder);
            passwordError.setAttribute("style", "display: inline;");
            passwordError.innerHTML = "<span style=\"color: #000000;\">Strength:</span> <span style=\"color: #FF9900;\">Good</span>";
            return true;
        }else if(checkPassStrength(password.value) == "Weak"){
            passwordError.removeAttribute("style");
            password.setAttribute("style",greenBorder);
            passwordError.setAttribute("style", "display: inline;");
            passwordError.innerHTML = "<span style=\"color: #000000;\">Strength:</span> <span style=\"color: #CC0000;\">Weak</span>";
            return true;
        }else{

        }
    }

    function updatePhone() {
        if(phone.value == ""){
            phone.setAttribute("style",basicBorder);
            phoneError.removeAttribute("style");
            return true;
        }else if(regexp.phone.test(phone.value)){
            phoneError.removeAttribute("style");
            phone.setAttribute("style",greenBorder);
            return true;
        }else if(!regexp.phone.test(phone.value)){
            phone.setAttribute("style",redBorder);
            return false;
        }
    }

    function updateSocial() {
        if(social.value == ""){
            social.setAttribute("style",basicBorder);
            socialError.removeAttribute("style");
            return true;
        }else if(regexp.social.test(social.value)){
            socialError.removeAttribute("style");
            social.setAttribute("style",greenBorder);
            return true;
        }else if(!regexp.social.test(social.value)){
            social.setAttribute("style",redBorder);
            return false;
        }
    }

    function checkPassStrength(pass) {
        var score = scorePassword(pass);
        if (score > 80)
            return "Strong";
        if (score > 60)
            return "Good";
        if (score >= 30)
            return "Weak";

        return "";
    }

    function scorePassword(pass) {
        var score = 0;
        if (!pass){
            return score;
        }

        var letters = new Object();
        for (var i=0; i<pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass)
        };

        var variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return parseInt(score);
    }

    function removeStyle(){
        usernameError.removeAttribute("style");
        emailError.removeAttribute("style");
        passwordError.removeAttribute("style");
        phoneError.removeAttribute("style");
        socialError.removeAttribute("style");
    }

    function addListeners(){
        password.addEventListener("keypress", updatePassword);
        password.addEventListener("keyup", updatePassword);
        password.addEventListener("keydown", updatePassword);

        username.addEventListener("keypress", updateUsername);
        username.addEventListener("keyup", updateUsername);
        username.addEventListener("keydown", updateUsername);

        email.addEventListener("keypress", updateEmail);
        email.addEventListener("keyup", updateEmail);
        email.addEventListener("keydown", updateEmail);

        phone.addEventListener("keypress", updatePhone);
        phone.addEventListener("keyup", updatePhone);
        phone.addEventListener("keydown", updatePhone);

        social.addEventListener("keypress", updateSocial);
        social.addEventListener("keyup", updateSocial);
        social.addEventListener("keydown", updateSocial);

        document.querySelector("#f_submit").addEventListener("click", onSubmit);
    }

    function removeListeners(){
        password.removeEventListener("keypress", updatePassword);
        password.removeEventListener("keyup", updatePassword);
        password.removeEventListener("keydown", updatePassword);

        username.removeEventListener("keypress", updateUsername);
        username.removeEventListener("keyup", updateUsername);
        username.removeEventListener("keydown", updateUsername);

        email.removeEventListener("keypress", updateEmail);
        email.removeEventListener("keyup", updateEmail);
        email.removeEventListener("keydown", updateEmail);

        phone.removeEventListener("keypress", updatePhone);
        phone.removeEventListener("keyup", updatePhone);
        phone.removeEventListener("keydown", updatePhone);

        social.removeEventListener("keypress", updateSocial);
        social.removeEventListener("keyup", updateSocial);
        social.removeEventListener("keydown", updateSocial);

        document.querySelector("#f_submit").removeEventListener("click", onSubmit);
    }
})();