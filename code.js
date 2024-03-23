const password=document.querySelector('#psw');
const confirmPassword=document.querySelector('#cpsw');
const errorMessage=document.querySelector('.message');
const errorClass=document.querySelector('.error');


password.classList.remove('error');
confirmPassword.classList.remove('error');

function validatePassword(){
    if(password.value!==confirmPassword.value){
        errorMessage.textContent="Passwords don't match!";
        password.classList.add('error');
        confirmPassword.classList.add('error');
    } else{
        errorMessage.textContent='';
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        
    }
}

password.addEventListener('input',validatePassword);
confirmPassword.addEventListener('input',validatePassword);
