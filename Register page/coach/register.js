const form = document.querySelector('#registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


form.addEventListener('submit', function(e){
    e.preventDefault();

    let isRequiredValid = checkRequired([username,email,password,confirmPassword]);
    
    let isFormValid = isRequiredValid;

    if(isRequiredValid){
        const isUsernameValid = checkLength(username,3,15);
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkLength(password,6, 25);
        const isPasswordsMatch = checkPasswordsMatch(password,confirmPassword);

        isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordsMatch;

    }

    if(isFormValid){
    /*     let array = [username, email, password, confirmPassword];

        array.forEach(input => {
            showSuccess(input);

        }); */

        setTimeout(() => {
             alert("Registration Successful!");
             form.reset();
        }, 500);

       

        

        document.querySelectorAll('.form-group').forEach(group => {
            group.className = 'form-group'
        })
    }
});


function checkRequired(inputArray){
    let isValid = true

    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${formatFieldName(input)} is required`);
            isValid = 'false'
        } else{
            showSuccess(input);
            return true;
        }
    })

    return isValid 
}
/* completed */

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match')
        return false;
    }

    return true
}


function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${formatFieldName(input)} must be at lease ${min} characters.`);
        return false;
    } else if(input.value.length > max){
        showError(input, `${formatFieldName(input)} must be at most ${max} characters.`);
        return false;
    } else{
        showSuccess(input);
        return true;
    }
}
/* completed */

function checkEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value.trim())){
        showSuccess(email);
        return true;
    } else{
        showError(email,'Email is not valid')
        return false;
    }
}
/* completed */



function formatFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
/* completed */


function showError(input,message){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error'
    const small = formGroup.querySelector('small');
    small.textContent = message;
}
/* completed */

function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}
/* completed */