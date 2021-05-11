'use strict';

const button1 = document.querySelector('.js-input1')
const button2 = document.querySelector('.js-input2')
const button3 = document.querySelector('.js-input3')

function changecolor (event) {
    const selectedButton = event.currentTarget;
    const card = document.querySelector('.js-card');
    card.classList.remove('js-color-blue');
    card.classList.remove('js-color-orange');

    if (selectedButton === button1) {
    } else if (selectedButton === button2) {
        card.classList.add('js-color-orange');
    } else {
        card.classList.add('js-color-blue');
    }
}

button1.addEventListener('click', changecolor);
button2.addEventListener('click', changecolor);
button3.addEventListener('click', changecolor);

