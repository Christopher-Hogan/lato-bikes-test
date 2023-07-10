var inputs = document.getElementsByClassName("form-control");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', check, false);
}

function check() {
    var checkInput = this;

    if (checkInput.value) {
        checkInput.closest(".animated-textbox").classList.add("has-content");
    } else {
        checkInput.closest(".animated-textbox").classList.remove("has-content");
    }
}