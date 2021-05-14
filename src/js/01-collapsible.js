'use strict';

const arrows = document.querySelectorAll('.js-arrow');

function handleCollapsibles(event) {
  const selectedSection = event.target.closest('.js-section');
  selectedSection.classList.toggle('active');
}

for (const arrow of arrows) {
  arrow.addEventListener('click', handleCollapsibles);
}

//create card button
const creationBtn = document.querySelector('.sharecard');

function handleButtonLink(event) {
  const selectedSection = event.target.closest('.collapsible');
  selectedSection.classList.toggle('showLink');
}
creationBtn.addEventListener('click', handleButtonLink);
