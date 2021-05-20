'use strict';

function createMessageError(text) {
  creationBtn.classList.add('errorButtonPress');

  const errorMessage = document.createElement('p');
  const errorContainer = document.querySelector('.js-errorcontainer');
  const errorMessageText = document.createTextNode(`Debes rellenar ${text}`);

  errorContainer.innerHTML = '';
  errorContainer.appendChild(errorMessage);
  errorMessage.appendChild(errorMessageText);
  errorMessage.setAttribute('class', 'CardCreated-a');
}

function handleButtonClickCreate(event) {
  if (userData.name === '') {
    createMessageError('el nombre');
  } else if (userData.job === '') {
    createMessageError('la profesion');
  } else if (userData.email === '') {
    createMessageError('el email');
  } else if (userData.linkedin === '') {
    createMessageError('el perfil de LinkedIn');
  } else if (userData.phone === '') {
    createMessageError('el telefono');
  } else if (userData.github === '') {
    createMessageError('el perfil de Github');
  } else {
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          createMessageError('todos los campos');
        } else {
          const selectedSection = event.target.closest('.collapsible');
          const linkCard = document.querySelector('.js-link-card');
          selectedSection.classList.toggle('showLink');
          //habria que cambiar el innerHTML de link card con el link que nos devuelva el servidor
        }
      })
      .catch(() => {
        createMessageError('el formulario más tarde!');
      });
  }
}

creationBtn.addEventListener('click', handleButtonClickCreate);
