document.getElementById("notifybtn").addEventListener("click", function(){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = document.getElementById('email').value;
    let erroremail = document.getElementById('error-email');
    if(email.match(validRegex)) {
        erroremail.textContent = "successfuly registered"
        return true;

    } else {
        erroremail.textContent = "Please provide a valid email address";
    }
});