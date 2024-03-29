// @ts-nocheck
"use strict";
import '../styles/index.scss';

let form = document.querySelector('.form-login');
let hiddenForm = document.querySelector('.signed-in');
let img = document.createElement("img");
let h2 = document.createElement("h2");
let errorMessage = document.createElement("p");
let emptyPasswordMessage = document.createElement("p");
let emptyEmailMessage = document.createElement("p");

hiddenForm.style.display = 'none';
document.querySelector(".button-submit").addEventListener("click", function () {
    let login = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;

    errorMessage.innerHTML = "E-Mail or password is incorrect";
    emptyEmailMessage.innerHTML = "E-Mail field is empty.";
    emptyPasswordMessage.innerHTML = "Password field is empty";

    if (!login && !pass) {
        if (document.querySelector('p')) document.querySelector('p').remove();
        document.querySelector("#submit").className = 'error';
        form.appendChild(errorMessage);
        document.querySelector('.form-login').className += ' form-login-error';
        document.querySelector('#email').className = 'error-input-field';
        document.querySelector('#pass').className = 'error-input-field';
        return;
    } else if (!login) {
        if (document.querySelector('p')) document.querySelector('p').remove();
        document.querySelector("#submit").className = 'error';
        form.appendChild(emptyEmailMessage);
        document.querySelector('.form-login').className += ' form-login-error';
        document.querySelector('#email').className = 'error-input-field';
        document.querySelector('#pass').className = 'password-field';
        return;
    } else if (!pass) {
        if (document.querySelector('p')) document.querySelector('p').remove();
        document.querySelector("#submit").className = 'error';
        form.appendChild(emptyPasswordMessage);
        document.querySelector('.form-login').className += ' form-login-error';
        document.querySelector('#pass').className = 'error-input-field';
        document.querySelector('#email').className = 'email-field';
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
        switch (response.status) {
            case 200:
                response.json().then((data) => {
                    if (document.querySelector('p')) document.querySelector('p').remove();
                    document.querySelector('#loader').className = 'loader';
                    setTimeout(() => {
                        form.style.display = 'none';
                        hiddenForm.style.display = '';
                        img.src = data.photoUrl;
                        h2.innerHTML = data.name;
                        hiddenForm.appendChild(h2);
                        hiddenForm.appendChild(img);
                        document.querySelector('#loader').classList.remove('loader');
                    }, 1000);
                    document.querySelector("#submit").className = 'button-submit';
                    document.querySelector('.form-login').classList.remove('form-login-error');
                });
                break;
            case 400:
                errorMessage.innerHTML = "E-Mail or password is incorrect";
                form.appendChild(errorMessage);
                document.querySelector('.form-login').className += ' form-login-error';
                document.querySelector("#submit").className = 'error';
                document.querySelector('#email').className = 'error-input-field';
                document.querySelector('#pass').className = 'error-input-field';
                console.log('Bad Request: ' + response.status);
                break;
            case 500:
                console.log('Internal Server Error: ' + response.status);
                break;

        }
    });
});

document.querySelector('.button-logout').addEventListener("click", function () {
    document.querySelector('#loader').className = 'loader';
    setTimeout(() => {
        hiddenForm.style.display = 'none';
        form.style.display = '';
        document.querySelector('#pass').className = 'password-field';
        document.querySelector('#email').className = 'email-field';
        document.querySelector("#submit").className = 'button-submit';
        document.querySelector('#loader').classList.remove('loader');
    }, 1000);
});