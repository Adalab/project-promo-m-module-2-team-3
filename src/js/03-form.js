'use strict';

const cardName = document.querySelector('.js-previewname');
const form = document.querySelector('.js-form');
const cardJob = document.querySelector('.js-previewjob');
const cardEmail = document.querySelector('.js-inputEmail');
const cardTel = document.querySelector('.js-inputTel');
const cardLinkedin = document.querySelector('.js-linkIn');
const cardGitHub = document.querySelector('.js-linkGit');

function handleChangeForm(event) {
  const input = event.target;
  const inputValue = input.value;
  if (input.name === 'fullName') {
    cardName.innerHTML = inputValue;
  } else if (input.name === 'rol') {
    cardJob.innerHTML = inputValue;
  } else if (input.name === 'emailAddress') {
    cardEmail.innerHTML = inputValue;
  } else if (input.name === 'telephone') {
    cardTel.innerHTML = inputValue;
  } else if (input.name === 'Linkedin') {
    cardLinkedin.href = 'https://www.linkedin.com/in/' + inputValue;
  } else {
    cardGitHub.href = 'https://github.com/' + inputValue;
  }
}

form.addEventListener('keyup', handleChangeForm);
