'use strict';

function changecolor() {
  const selectedButton = document.querySelector('.js-input-design:checked');

  const card = document.querySelector('.js-card');
  card.classList.remove('js-color-blue');
  card.classList.remove('js-color-orange');

  if (selectedButton === buttons[0]) {
  } else if (selectedButton === buttons[1]) {
    card.classList.add('js-color-orange');
  } else if (selectedButton === buttons[2]) {
    card.classList.add('js-color-blue');
  }
}

changecolor();

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener('click', changecolor);
}
