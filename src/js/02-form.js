'use strict';

const inputValueName = document.querySelector('.js-inputname');
const cardName = document.querySelector('.js-previewname');
const form = document.querySelector('.js-form');

function handleChangeForm(event) {
  const input = event.target;
  const inputValue = input.value;
  if (input.name === 'fullName') {
    cardName.innerHTML = inputValue;
  } else if (input.name === 'rol') {
    cardName.innerHTML = inputValue;
  }
}

form.addEventListener('change', handleChangeForm);
