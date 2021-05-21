'use strict';
function handleChangeForm(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  userData[inputName] = inputValue;
  paintFormInCard();
  setData();
}

function paintFormInCard() {
  if (userData.name === '') {
    cardName.innerHTML = 'Nombre Apellidos';
  } else {
    cardName.innerHTML = userData.name;
  }

  if (userData.job === '') {
    cardJob.innerHTML = 'Front end developer';
  } else {
    cardJob.innerHTML = userData.job;
  }

  cardEmail.href = 'mailto:' + userData.email;
  cardTel.href = 'tel:' + userData.phone;
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

//RESET BUTTON
function handleResetButton() {
  form.reset();
  userData.name = '';
  userData.job = '';
  userData.email = '';
  userData.linkedin = '';
  userData.phone = '';
  userData.github = '';
  userData.palette = 1;
  userData.photo = '';

  console.log(userData);
  paintFormInCard();
  paintPhotoInCard();
  //console.log(buttons[0]);
  buttons[0].checked = true;
  changecolor();

  localStorage.clear();
}
resetButton.addEventListener('click', handleResetButton);
