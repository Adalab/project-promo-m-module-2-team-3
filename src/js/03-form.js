'use strict';
function handleChangeForm(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  userData[inputName] = inputValue;
  paintFormInCard();
  localStorage.setItem('user', JSON.stringify(userData));
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

  paintFormInCard();
  paintPhotoInCard();

  buttons[0].checked = true;
  changecolor();

  localStorage.clear();
}
resetButton.addEventListener('click', handleResetButton);
