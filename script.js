const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm()
{
    //using Constraint validation API
    isValid = form.checkValidity();

    if(!isValid)
    {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        message.style.borderColor ='red';
        return;
    }
    
    if(password1.value === password2.value)
    {
        passwordsMatch = true;

        password1.style.borderColor ='green';
        password2.style.borderColor ='green';
    }
    else
    {
        passwordsMatch = false;
        password1.style.color = 'red';
        password2.style.color = 'red';
        password1.style.borderColor ='red';
        password2.style.borderColor ='red';

        message.textContent = 'Passwords must match.';
        message.style.color = 'red';
        message.style.borderColor ='red';
        return;
    }

    if(isValid && passwordsMatch)
    {
        message.textContent = 'Suuccessfully Rgistered!';
        message.style.color = 'green';
        message.style.borderColor ='green';
        storeFormData()
    }

}

function storeFormData()
{
    const user = {
        name: form.username.value,
        email: form.email.value,
        phone: form.phone.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
    alert(JSON.stringify(user));
}

function formData(e)
{
    e.preventDefault();
    validateForm();
}


form.addEventListener('submit', formData)