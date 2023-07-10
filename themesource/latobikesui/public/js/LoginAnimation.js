var inputs = document.getElementsByClassName("form-control");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', check, false);
}

function check() {
    var checkInput = this;

    if (checkInput.value) {
        checkInput.closest(".login-textbox").classList.add("has-content");
    } else {
        checkInput.closest(".login-textbox").classList.remove("has-content");
    }
}

var emailText = document.getElementsByClassName("email-textbox")[0].getElementsByClassName("form-control")[0];
var passwordText = document.getElementsByClassName("password-textbox")[0].getElementsByClassName("form-control")[0];

//check if textboxes are empty
function EmptyValidation() {
    if (emailText.value.length == 0 || passwordText.value.length == 0) {
        return false;
    }
    else {
        return true;
    }
}

//on enter submit button
passwordText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (EmptyValidation()) {
            document.getElementsByClassName("btn-signin")[0].click();
        }
    }
});

//on enter submit button
emailText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (EmptyValidation()) {
            document.getElementsByClassName("btn-signin")[0].click();
        }
    }
});

//replace class A with class B
function superToggle(element, classA, classB) { 
    element.classList.toggle(classA);
    element.classList.toggle(classB);
}

//function to show the password
function ChangePasswordDisplay() {
    superToggle(toggleButton.getElementsByClassName("glyphicon")[0],'glyphicon-eye-close', 'glyphicon-eye-open');

    if (passwordText.getAttribute("type") === "password") {
        passwordText.setAttribute("type", "text");
    } else {
        passwordText.setAttribute("type", "password");
    }
}

var toggleButton = document.getElementsByClassName("toggle-password")[0];

toggleButton.addEventListener("click", function() {
    ChangePasswordDisplay()
});