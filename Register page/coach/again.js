const { extname } = require("node:path");

const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const isRequiredValid = checkRequired([username, email, password, confirmPassword]);

    let isFormValid = isRequiredValid;

    if(isFormValid){
        const isUserNameValid = checkLength(username, min, max);
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkLength(password,6,25);
        const isPasswordsMatch = checkPasswordsMatch(password, confirmPassword);

        isFormValid = isUserNameValid && isEmailValid && isPasswordValid && isPasswordsMatch;
    }

    if(isFormValid){
        alert('Registration Successful!');
        form.reset();

        document.querySelectorAll('.form-group').forEach(group => {
            group.className = 'form-group';
        })
    }
});

function checkRequired(inputArray){
    let isValid = true;

    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${formatFieldName(input)} is required`);

            isValid = false;

        } else{
            showSuccess(input );
            return true;
        }
    });

    return isValid;
}

function showError(input, message){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.textContent = message;
};

function formatFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success'
}

function checkLength(input, min ,max){
    if(input.value.length < min){
        showError(input, `${formatFieldName(input)} must be at least ${min} characters.`)
    } else if(input.value.length > max){
        showError(input, `${formatFieldName(input)} must be at most ${max} characters.`)
    } else{
        showSuccess(input);
        return true;
    }
}

function checkEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email.value.trim())){
        showSuccess(email)
        return true;
    } else {
        showError(email , `Email is not valid `);
        return false;
    }   
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `Password donot much`)
    }

    return true;
}