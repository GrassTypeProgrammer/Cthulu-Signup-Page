document.getElementById('password').addEventListener('change', onChangePassword);
document.getElementById('passwordConfirm').addEventListener('change', onChangePassword);
document.getElementById('firstName').addEventListener('change', onChangeFirstName);
document.getElementById('form').addEventListener('submit', onSubmit);

const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const passwordRequiredLabel = document.getElementById('passwordRequired');
const passwordConfirmRequiredLabel = document.getElementById('passwordConfirmRequired');
const firstName = document.getElementById('firstName');
const firstNameRequiredLabel = document.getElementById('firstNameRequired');


function onChangePassword(){
    if(password.value == '' && passwordConfirm.value == ''){
       passwordRequiredLabel.innerText = "* Required";
       passwordConfirmRequiredLabel.innerText = "* Required";
   }
    else if(password.value.length < 6){
        passwordRequiredLabel.innerText = "* Password must be at least 6 characters long!";
    }
    else if(password.value != passwordConfirm.value){
        passwordRequiredLabel.innerText = "* Passwords don't match!";
    }
    else if(password.value == passwordConfirm.value){
        passwordRequiredLabel.innerText = '';
        passwordConfirmRequiredLabel.innerText = '';
    }
}

function onChangeFirstName(){
    if(firstName.value == ''){
        firstNameRequiredLabel.innerText = '* Required';
    }
    else{
        firstNameRequiredLabel.innerText = '';
    }
}

function onSubmit(event){
    if(password.value !== passwordConfirm.value){
        event.preventDefault();
        alert("Your passwords don't match!");
    }
    else if (firstName.value == ''){
        event.preventDefault();
        alert("Please enter your first name");
    }


}