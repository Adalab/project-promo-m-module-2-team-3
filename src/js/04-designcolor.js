'use strict';

const button1 = document.querySelector('.js-input1');
const button2 = document.querySelector('.js-input2');
const button3 = document.querySelector('.js-input3');

function changecolor(event) {
  const selectedButton = event.currentTarget;
  const header = document.querySelector('.card_info--name');
  const left = document.querySelector('.card_info');
  const mediaitem = document.querySelector('.card_media--item');

  if (selectedButton === button1) {
    return false;
  } else if (selectedButton === button2) {
    header.classList.add('js-color-orangename');
    left.classList.add('js-color-orangeinfo');
    mediaitem.classList.add('js-color-orangemediaitem');
  } else {
    header.classList.add('js-color-bluename');
    left.classList.add('js-color-blueinfo');
    mediaitem.classList.add('js-color-bluemediaitem');
  }
}

button1.addEventListener('click', changecolor);
button2.addEventListener('click', changecolor);
button3.addEventListener('click', changecolor);
