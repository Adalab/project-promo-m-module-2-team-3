'use strict';
const inputName = document.querySelector('.js-inputname');
const inputJob = document.querySelector('.js-inputjobtitle');
const inputEmail = document.querySelector('.js-inputEmail');
const inputTel = document.querySelector('.js-inputTel');
const inputIn = document.querySelector('.js-inputIn');
const inputGit = document.querySelector('.js-inputGit');

//recogemos los datos y los dejamos pintados por defecto
function getData() {
  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'));
    inputName.value = user.name;
    inputJob.value = user.job;
    inputEmail.value = user.email;
    inputTel.value = user.phone;
    inputIn.value = user.linkedin;
    inputGit.value = user.github;
  }
}
getData();

function setData() {
  localStorage.setItem('user', JSON.stringify(userData));
}
