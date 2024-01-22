var currentColorPalette = 1;
setColorByPalette(currentColorPalette);
        
document.getElementById("color-palette-changer").addEventListener('click', () => {
    if (currentColorPalette == 1) {
        currentColorPalette = 2;
    }
    else if (currentColorPalette == 2) {
        currentColorPalette = 3;
    }
    else if (currentColorPalette == 3) {
        currentColorPalette = 1;
    }
    setColorByPalette(currentColorPalette);
});

// Validating Radio Buttons
const reasonRadioButtons = document.getElementsByName('reason');
reasonRadioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', validateRadioButtons);
})
function validateRadioButtons() {
    if (this.value == "Socializing") {
        alert("This feature has not been released yet. Appologies for the inconvenience.");
        document.getElementById('Query').checked = true;
    }
}

// Validating Phone number
const phoneNumber = document.getElementById('contact');
phoneNumber.addEventListener('change', validatePhoneNumber);
function validatePhoneNumber() {
    if (isNaN(this.value)) {
        alert("Phone number cannot have non-numbers in it.");
        phoneNumber.value = "";
    }
}

function setColorByPalette(palletNumber) {
    if (palletNumber == 1) {
        document.getElementById('body').style.backgroundColor = '#454545';
        document.getElementById('body').style.color = "#FFE6C7";
        document.getElementById('header').style.backgroundColor ="#FFA559";
        document.getElementById('header').style.color ="#454545";
        document.getElementById('footer').style.backgroundColor ="#FFA559";
        document.getElementById('footer').style.color ="#454545";

        var navLinks = document.getElementsByClassName("url-a");
        Array.prototype.forEach.call(navLinks, function(navLink) {
            navLink.style.color = "#454545";
        });

        let submitButton = document.getElementById("submit-btn");
        if(submitButton){
            submitButton.style.backgroundColor = "#FFA559";
            submitButton.style.color = "#000000";
        }
        

        document.getElementById("color-palette-changer").style.backgroundColor = "#454545";
        document.getElementById("color-palette-changer").style.color = "#FFA559";
    }
    else if (palletNumber == 2) {
        // change colors
        alert("2nd Color Palette");
        document.getElementById('body').style.backgroundColor = '#FDF4F5';
        document.getElementById('body').style.color = "#454545";
        document.getElementById('header').style.backgroundColor ="#E8A0BF";
        document.getElementById('header').style.color ="#454545";
        document.getElementById('footer').style.backgroundColor ="#E8A0BF";
        document.getElementById('footer').style.color ="#454545";

        var navLinks = document.getElementsByClassName("url-a");
        Array.prototype.forEach.call(navLinks, function(navLink) {
            navLink.style.color = "#FFFBF5";
        });

        let submitButton = document.getElementById("submit-btn");
        if(submitButton){
            submitButton.style.backgroundColor = "#BA90C6";
            submitButton.style.color = "#FDF4F5";
        }
        

        document.getElementById("color-palette-changer").style.backgroundColor = "#454545";
        document.getElementById("color-palette-changer").style.color = "#E8A0BF";

    }
    else if (palletNumber == 3) {
        // change colors
        alert("3rd Color Palette");
        document.getElementById('body').style.backgroundColor = '#CFB997';
        document.getElementById('body').style.color = "#FFFBF5";
        document.getElementById('header').style.backgroundColor ="#7B8FA1";
        document.getElementById('header').style.color ="#FFFBF5";
        document.getElementById('footer').style.backgroundColor ="#7B8FA1";
        document.getElementById('footer').style.color ="#FFFBF5";

        var navLinks = document.getElementsByClassName("url-a");
        Array.prototype.forEach.call(navLinks, function(navLink) {
            navLink.style.color = "#FFFBF5";
        });

        let submitButton = document.getElementById("submit-btn");
        if(submitButton){
            submitButton.style.backgroundColor = "#BA90C6";
            submitButton.style.color = "#FFFBF5";
        }
        

        document.getElementById("color-palette-changer").style.backgroundColor = "#454545";
        document.getElementById("color-palette-changer").style.color = "#FFFBF5";
    }
}
