'use strict';
//recogemos los datos y los dejamos pintados por defecto
function getData() {
  if (localStorage.getItem('palettes')) {
    let palette = JSON.parse(localStorage.getItem('palettes'));
    console.log(palette);
  }
  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'));
    inputName.value = user.name;
    inputJob.value = user.job;
    inputEmail.value = user.email;
    inputTel.value = user.phone;
    inputIn.value = user.linkedin;
    inputGit.value = user.github;
    //inputPhoto.value = user.photo;

    userData.name = user.name;
    userData.job = user.job;
    userData.email = user.email;
    userData.linkedin = user.phone;
    userData.phone = user.linkedin;
    userData.github = user.github;
    userData.photo = user.photo;
    userData.palette = user.palette;

    paintFormInCard();
    paintPhotoInCard();
    changecolor();
  }
}
getData();
