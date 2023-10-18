// // Declaring variables for the input errors
var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var dateError = document.getElementById("date-error");
var cvcError = document.getElementById("cvc-error");
var submitError = document.getElementById("submit-error");
var inputError = document.querySelector(".input-error");

// Declaring variables for the card details
var cardName = document.getElementById("card-name");
var cardNumber = document.getElementById("card-number");
var cardDate = document.getElementById("card-date");
var cardCvc = document.getElementById("card-cvc");


function validateName() {
    var name = document.getElementById("fname").value;

    if (name.length == 0) {
        inputError.classList.add("invalid");
        nameError.innerHTML = "name is blank";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        inputError.classList.add("invalid");
        nameError.innerHTML = "fullname is needed";
        return false;
    }
    nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    inputError.classList.remove("invalid");
    cardName.textContent = name.toUpperCase();
    return true;
}

function validateNumber() {
    var number = document.getElementById("fnumber").value; 
    
    if (number == "") {
        // inputError.classList.add("invalid")
        numberError.innerHTML = "please input numbers";
        return false;
    }
    if (number.length !== 16) {
        // inputError.classList.add("invalid")
        numberError.innerHTML = "numbers should be 16 digits";
        return false;
    }
    if (!number.match(/^[0-9]{16}$/)) {
        // inputError.classList.add("invalid")
        numberError.innerHTML = "only digits please";
        return false;
    }
    numberError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    // inputError.classList.remove("invalid")
    cardNumber.textContent = number.replace(/\d{4}(?=.)/g, '$& ');
    return true;
}

function validateDate() {
    var month = document.getElementById("fmonth").value;
    var year = document.getElementById("fyear").value;

    if (month == "" || year == "") {
        // inputError.classList.add("invalid")
        dateError.innerHTML = "can't be blank";
        return false;
    }
    if (month.length !==2 || year.length !==2) {
        // inputError.classList.add("invalid")
        dateError.innerHTML = "can't be blank";
        return false;
    }
    dateError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    // inputError.classList.remove("invalid")
    cardDate.textContent = month + "/" + year;
    return true;
}

function validateCvc() {
    var cvc = document.getElementById("fcvc").value;

    if (cvc == "") {
        // inputError.classList.add("invalid")
        cvcError.innerHTML = "can't be blank";
        return false;
    }
    if (cvc.length !== 3) {
        // inputError.classList.add("invalid")
        cvcError.innerHTML = "3 digits are needed";
        return false;
    }
    cvcError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    // inputError.classList.remove("invalid")
    cardCvc.textContent = cvc;
    return true;
}

function validateForm() {
    var showCompleted = document.getElementById("complete");
    var myForm = document.getElementById("my-form");

    if (!validateName() || !validateNumber() || !validateDate() || !validateCvc()) {
        submitError.style.display = "block";
        submitError.innerHTML = "please fix the error warnings";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
    myForm.style.display = "none";
    showCompleted.style.display = "block";
}