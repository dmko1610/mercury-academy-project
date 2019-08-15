// @ts-nocheck
"use strict"
import '../styles/index.scss';

let form = document.querySelector('.form-login');
let hiddenForm = document.querySelector('.signed-in');
let img = document.createElement("img");
let h2 = document.createElement("h2");
let errorMessage = document.createElement("p");


hiddenForm.style.display = 'none';
document.querySelector(".button-submit").addEventListener("click", function () {
    let login = document.querySelector('.email-field').value;
    let pass = document.querySelector('.password-field').value;

    if (!login || !pass) {
        errorMessage.innerHTML = "E-Mail or password is incorrect";
        form.appendChild(errorMessage);
        return;
    }

    fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
        body: JSON.stringify({
            email: login,
            password: pass,
        }),
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
    }
    ).then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
            return;
        }
        response.json().then((data) => {            
            document.querySelector('p').remove();
            form.style.display = 'none';
            hiddenForm.style.display = '';
            img.src = data.photoUrl;
            h2.innerHTML = data.name;
            hiddenForm.appendChild(img);
            hiddenForm.appendChild(h2);
        });
    });
});

document.querySelector('.button-logout').addEventListener("click", function () {
    hiddenForm.style.display = 'none';
    form.style.display = '';
});