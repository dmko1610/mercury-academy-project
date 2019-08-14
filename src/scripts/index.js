import '../styles/index.scss';

console.log("WHAAT");

document.querySelector(".button-submit").addEventListener("click", function () {
    let login = document.querySelector('.email-field').value;
    let pass = document.querySelector('.password-field').value;
    console.log(login);
    console.log(pass);
});
