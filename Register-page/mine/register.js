const smalls = document.querySelectorAll('.small');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form  = document.querySelector('.form-validator');
const successfulRegistration = document.querySelector('.successful');

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkUsername();
    checkEmail();
    checkPassword();
    checkPasswordMatch();

    const isValidUsername = checkUsername();
    const isValidEmail = checkEmail();
    const isValidPassword = checkPassword();
    const isPasswordsMatch = checkPasswordMatch();

    const isFormValid = isValidUsername && isValidEmail && isValidPassword && isPasswordsMatch;

    if(isFormValid){
        form.reset();
        document.querySelectorAll('.form-group').forEach(group => {
            group.className = 'form-group';
        });

        successfulRegistration.style.display = 'flex';
        form.style.display = 'none';

        setTimeout(() => {
             window.location.href = "https://www.instagram.com/dgbisrat1/";    
             
        }, 500);
        
    }
});

function checkUsername(){
    const usernameValue = username.value.trim();
   /*  const formGroup = username.parentElement;
    const small = formGroup.querySelector('small'); */

    if(usernameValue === ''){
        setError(username, 'username is required')
        return false;
    } else if(usernameValue.length < 3){
        /* formGroup.classList.add('error');
        small.innerHTML = `${username.id} needs at least 3 characters.` */
        setError(username, 'username needs at least 3 characters')
        return false;
    } else if (usernameValue.length > 15){
/*         formGroup.classList.add('error');
        small.innerHTML = `${username.id} needs at most 15 characters.` */
        setError(username, 'username needs at most 15 characters');
        return false;
    } else{
        setSuccess(username)
        return true;
    }
}

function checkEmail(){
    const emailValue = email.value.trim();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === ''){
        setError(email, 'Email is required')
        return false;
    } else if(!regex.test(emailValue)){
        setError(email, 'Invalid email')
        return false;
    } else{
        setSuccess(email)
        return true;
    }
}

function checkPassword(){
    const passwordValue = password.value.trim();
    
    if(passwordValue === ''){
        setError(password, 'Password is required')
        return false;
    } else if(passwordValue.length < 6){
        setError(password, 'Password should be at least 6 characters')
        return false;
    } else if(passwordValue.length > 25){
        setError(password, 'Password should be at most 25 characters')
        return false;
    } else{
        setSuccess(password);
        return true;
    }
};


function checkPasswordMatch(input1, input2){
    const passwordValue = password.value.trim();
    const confirmValue = confirmPassword.value.trim();

    if(confirmValue === ''){
        setError(confirmPassword, 'Please confirm your password')
        return false;
    } else if(passwordValue !== confirmValue){
        setError(confirmPassword, 'Passwords do not match')
        return false;
    } else{
        setSuccess(confirmPassword);
        return true;
    }
}


function setError(input, message){
 const formGroup = input.parentElement;
 const small = formGroup.querySelector('small')   ;

 formGroup.className = 'form-group error';
 small.innerHTML = message;
}

function setSuccess(input){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");

    formGroup.className = "form-group success";
    small.innerHTML = '';
}


/* 
function checkUsername(){
    const usernameValue = username.value.trim();
    const formGroup = username.parentElement;
    const small = formGroup.querySelector('small');

    if(usernameValue.length < 3){
        formGroup.classList.add('error');
        small.innerHTML = 'At least 3 characters';
        return false;
    } 
    else if (usernameValue.length > 15){
        formGroup.classList.add('error');
        small.innerHTML = 'Max 15 characters';
        return false;
    } 
    else{
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        small.innerHTML = '';
        return true;
    }
} */