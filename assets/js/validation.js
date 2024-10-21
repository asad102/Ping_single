document.getElementById('contactus').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.value.trim();

    // Regular Expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      // If email field is empty
      emailError.textContent = "Email is required.";
    } else if (!emailRegex.test(emailValue)) {
      // If email is invalid
      emailError.textContent = "Please enter a valid email address.";
    } else {
      // If email is valid
      emailError.textContent = "";
      emailError.textContent = "Successfully registered";
    }
  });