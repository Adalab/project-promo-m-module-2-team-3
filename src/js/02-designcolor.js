'use strict';
function changecolor() {
  const selectedButton = document.querySelector('.js-input-design:checked');
  const card = document.querySelector('.js-card');
  card.classList.remove('js-color-blue');
  card.classList.remove('js-color-orange');

  if (selectedButton.value === '1') {
  } else if (selectedButton.value === '2') {
    card.classList.add('js-color-orange');
  } else if (selectedButton.value === '3') {
    card.classList.add('js-color-blue');
  }

  userData.palette = parseInt(selectedButton.value);
  localStorage.setItem('palettes', JSON.stringify(userData.palette));
}

changecolor();

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener('click', changecolor);
}
