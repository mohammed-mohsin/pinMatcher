///////////* Generate Pin Button Handler *///////////

let generateBtn = document.querySelector(".generate-btn");

let generatedPin = document.querySelector("#generated-pin");
generateBtn.addEventListener("click", function () {
    pin = Math.round(Math.random() * 999 + 1000);

    generatedPin.value = pin;

});

///////////*Enter Pin in Number Box*///////////

let numbers = document.querySelector(".numbers");
let typedPin = document.querySelector("#typed-pin");
numbers.addEventListener("click", function (e) {
    if (e.target.matches(".button" && ".number")) {
        let newTypedPin = e.target.innerHTML;
        typedPin.value += newTypedPin;
    }
});


///////////* Delete Pin *///////////

let back = document.querySelector("#back");
back.addEventListener("click", function () {
    typedPin.value = typedPin.value.substring(0, typedPin.value.length - 1);
});


///////////*Clear Pin*///////////
let clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
    typedPin.value = "";
});



///////////* Submit Button Handler *///////////
let submit = document.querySelector("#submit");
let pinGenerate = document.querySelector("#pin-generate");
submit.addEventListener("click", function () {

    if (typedPin.value != "" && generatedPin.value != "") {
        if (generatedPin.value === typedPin.value) {
            let matched = document.querySelector("#matched");
            matched.style.display = "block";
            matched.classList.add("animate-bottom");
            let actionLeft = document.querySelector(".action-left");
            actionLeft.innerHTML = "You Got It";
            actionLeft.style.color = "green";
        } else {
            let wrong = document.querySelector("#wrong");
            wrong.style.display = "block";
            wrong.classList.add("animate-bottom");
        }

    }
});