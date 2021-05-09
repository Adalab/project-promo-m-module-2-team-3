'use strict';

const inputValueName = document.querySelector('.js-inputname');
const cardName = document.querySelector('.js-previewname');

function handleNameChange(event) {
  const inputValue2 = event.currentTarget.Value;
  cardName.innerHTML = inputValue2;
}

inputValueName.addEventListener('change', handleNameChange);
