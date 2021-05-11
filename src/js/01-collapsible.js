'use strict';

const arrowDesign = document.querySelector ('.js-arrow-design');
const arrowFill = document.querySelector ('.js-arrow-fill');
const arrowShare = document.querySelector ('.js-arrow-share');

function handleCollapsibles(event) {
  const selectedSection = event.target.closest('.js-section');
  selectedSection.classList.toggle ('active');
}

arrowDesign.addEventListener ('click', handleCollapsibles);
arrowFill.addEventListener ('click', handleCollapsibles);
arrowShare.addEventListener ('click', handleCollapsibles);


//create card button
const creationBtn = document.querySelector ('.sharecard');

function handleButtonLink (event) {
  const selectedSection = event.target.closest('.collapsible');
  selectedSection.classList.toggle ('showLink');
}
creationBtn.addEventListener ('click', handleButtonLink);
