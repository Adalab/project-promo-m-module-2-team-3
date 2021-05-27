'use strict';
function getData() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user !== null) {
    for (const button of buttons) {
      if (button.value === user.palette) {
        button.checked = true;
      }
      const card = document.querySelector('.js-card');
      card.classList.remove('js-color-3');
      card.classList.remove('js-color-2');

      card.classList.add(`js-color-${user.palette}`);
    }
    inputName.value = user.name;
    inputJob.value = user.job;
    inputEmail.value = user.email;
    inputTel.value = user.phone;
    inputIn.value = user.linkedin;
    inputGit.value = user.github;

    userData.name = user.name;
    userData.job = user.job;
    userData.email = user.email;
    userData.linkedin = user.phone;
    userData.phone = user.linkedin;
    userData.github = user.github;
    userData.photo = user.photo;

    paintFormInCard();
    paintPhotoInCard();
  }
}
getData();
