function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var phone = document.getElementById('phone').value;

    // Validate name
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate email
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    // Validate password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Validate phone number (basic validation)
    if (phone.length < 10 || isNaN(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    return true;
}
