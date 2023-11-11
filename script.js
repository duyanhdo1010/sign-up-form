var checkPassword = function(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password != confirmPassword) {
        password.style.cssText = "border-color: red; ";
        confirmPassword.style.cssText = "border-color: red;";
        password.classList.add("error");
        return false;
    }
    password.style.cssText = "border-color: green; ";
    confirmPassword.style.cssText = "border-color: green;";
    password.classList.remove("error");
    return true;
}

document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myForm").submit();
});