!function(e){function r(r){for(var t,c,u=r[0],a=r[1],s=r[2],d=0,m=[];d<u.length;d++)c=u[d],n[c]&&m.push(n[c][0]),n[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(i&&i(r);m.length;)m.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,r=0;r<l.length;r++){for(var o=l[r],t=!0,u=1;u<o.length;u++){var a=o[u];0!==n[a]&&(t=!1)}t&&(l.splice(r--,1),e=c(c.s=o[0]))}return e}var t={},n={0:0},l=[];function c(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,r,o){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(o,t,function(r){return e[r]}.bind(null,t));return o},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var i=a;l.push([35,1]),o()}({35:function(e,r,o){"use strict";o.r(r);o(36),o(37),o(42),o(71);var t=document.querySelector(".form-login"),n=document.querySelector(".signed-in"),l=document.createElement("img"),c=document.createElement("h2"),u=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p");n.style.display="none",document.querySelector(".button-submit").addEventListener("click",function(){var e=document.querySelector("#email").value,r=document.querySelector("#pass").value;return u.innerHTML="E-Mail or password is incorrect",s.innerHTML="E-Mail field is empty.",a.innerHTML="Password field is empty",e||r?e?r?void fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login",{body:JSON.stringify({email:e,password:r}),headers:{"Content-type":"application/json"},method:"POST"}).then(function(e){switch(e.status){case 200:e.json().then(function(e){document.querySelector("p")&&document.querySelector("p").remove(),document.querySelector("#loader").className="loader",setTimeout(function(){t.style.display="none",n.style.display="",l.src=e.photoUrl,c.innerHTML=e.name,n.appendChild(c),n.appendChild(l),document.querySelector("#loader").classList.remove("loader")},1e3),document.querySelector(".form-login").classList.remove("form-login-error")});break;case 400:u.innerHTML="E-Mail or password is incorrect",t.appendChild(u),document.querySelector(".form-login").className+=" form-login-error",document.querySelector("#submit").className="error",document.querySelector("#email").className="error-input-field",document.querySelector("#pass").className="error-input-field",console.log("Bad Request: "+e.status);break;case 500:console.log("Internal Server Error: "+e.status)}}):(document.querySelector("p")&&document.querySelector("p").remove(),document.querySelector("#submit").className="error",t.appendChild(a),document.querySelector(".form-login").className+=" form-login-error",document.querySelector("#pass").className="error-input-field",void(document.querySelector("#email").className="email-field")):(document.querySelector("p")&&document.querySelector("p").remove(),document.querySelector("#submit").className="error",t.appendChild(s),document.querySelector(".form-login").className+=" form-login-error",document.querySelector("#email").className="error-input-field",void(document.querySelector("#pass").className="password-field")):(document.querySelector("p")&&document.querySelector("p").remove(),document.querySelector("#submit").className="error",t.appendChild(u),document.querySelector(".form-login").className+=" form-login-error",document.querySelector("#email").className="error-input-field",void(document.querySelector("#pass").className="error-input-field"))}),document.querySelector(".button-logout").addEventListener("click",function(){document.querySelector("#loader").className="loader",setTimeout(function(){n.style.display="none",t.style.display="",document.querySelector("#pass").className="password-field",document.querySelector("#email").className="email-field",document.querySelector("#submit").className="button-submit",document.querySelector("#loader").classList.remove("loader")},1e3)})},71:function(e,r,o){}});
//# sourceMappingURL=app.3eb8b7e9.js.map