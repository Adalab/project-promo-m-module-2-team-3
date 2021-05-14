'use strict';

const cardName = document.querySelector('.js-previewname');
const form = document.querySelector('.js-form');
const cardJob = document.querySelector('.js-previewjob');
const cardEmail = document.querySelector('.js-linkEmail');
const cardTel = document.querySelector('.js-linkTel');
const cardLinkedin = document.querySelector('.js-linkIn');
const cardGitHub = document.querySelector('.js-linkGit');

const userData = {
  name: '',
  job: '',
  email: '',
  linkedin: '',
  phone: '',
  gitHub: '',
};

function handleChangeForm(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  userData[inputName] = inputValue;

  cardName.innerHTML = userData.name;
  cardJob.innerHTML = userData.job;
  cardEmail.href = userData.email;
  cardTel.href = userData.phone;
  cardLinkedin.href = `https://linkedin.com/in/${userData.linkedin}`;
  cardGitHub.href = `https://github.com/${userData.gitHub}`;
  // if (input.name === 'fullName') {
  //   cardName.innerHTML = inputValue;
  // } else if (input.name === 'rol') {
  //   cardJob.innerHTML = inputValue;
  // } else if (input.name === 'emailAddress') {
  //   cardEmail.innerHTML = inputValue;
  // } else if (input.name === 'telephone') {
  //   cardTel.innerHTML = inputValue;
  // } else if (input.name === 'Linkedin') {
  //   cardLinkedin.href = event.target;
  // } else {
  //   cardGitHub.href = 'https://github.com/' + inputValue;
  // }
}

form.addEventListener('change', handleChangeForm);
