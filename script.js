var passwordField = document.getElementById("password");
var confirmPasswordField = document.getElementById("confirm-password");
var checkPasswordMessage = document.querySelector(".check-password");

function checkPassword() {
    var password = passwordField.value;
    var confirmPassword = confirmPasswordField.value;

    if (password != confirmPassword) {
        passwordField.style.cssText = "border-color: red; border-width: 2px; ";
        confirmPasswordField.style.cssText = "border-color: red; border-width: 2px;";
        checkPasswordMessage.textContent = "* Passwords do not match!";
        return false;
    }
    passwordField.style.cssText = "border-color: green; border-width: 2px;";
    confirmPasswordField.style.cssText = "border-color: green; border-width: 2px;";
    checkPasswordMessage.textContent = "";
    return true;
}