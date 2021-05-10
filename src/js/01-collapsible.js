'use strict';

// const designSection = document.querySelector ('.js-design');
// const fillSection = document.querySelector ('.js-fill');
// const shareSection = document.querySelector ('.js-share');

// function showContent (event) {
//   const arrowUp = event.target.closest ('.js-arrowUp');
//   const arrowDown = event.target.closest ('.js-arrowDown');
//   const content = event.target.closest ('.js-collapsibleContainer');
//   if (arrowUp.classList.contains ('.hidden')) {
//     arrowUp.classList.add ('.hidden');
//     arrowDown.classList.remove ('.hidden');
//     content.classList.remove ('.hidden');
//   } else {
//     arrowUp.classList.remove ('.hidden');
//     arrowDown.classList.add ('.hidden');
//     content.classList.add ('.hidden');
//   }
//   console.log('arrowUp');
// }

// designSection.addEventListener ('click', showContent);
// fillSection.addEventListener ('click', showContent);
// shareSection.addEventListener ('click', showContent);


//design section
const arrowUpDesign = document.querySelector ('.js-arrowUpDesign');
const arrowDownDesign = document.querySelector ('.js-arrowDownDesign');
const contentDesign = document.querySelector ('.js-collapsibleContainerDesign');
function collapsibleDesign () {
  arrowUpDesign.classList.toggle('hidden');
  arrowDownDesign.classList.toggle('hidden');
  contentDesign.classList.toggle('hidden');
}
arrowUpDesign.addEventListener ('click', collapsibleDesign);
arrowDownDesign.addEventListener ('click', collapsibleDesign);


//fill section
const arrowUpFill = document.querySelector ('.js-arrowUpFill');
const arrowDownFill = document.querySelector ('.js-arrowDownFill');
const contentFill = document.querySelector ('.js-collapsibleContainerFill');
function collapsibleFill () {
  arrowUpFill.classList.toggle('hidden');
  arrowDownFill.classList.toggle('hidden');
  contentFill.classList.toggle('hidden');
}
arrowUpFill.addEventListener ('click', collapsibleFill);
arrowDownFill.addEventListener ('click', collapsibleFill);


//share section
const arrowUpShare = document.querySelector ('.js-arrowUpShare');
const arrowDownShare = document.querySelector ('.js-arrowDownShare');
const contentShare = document.querySelector ('.js-collapsibleContainerShare');
function collapsibleShare () {
  arrowUpShare.classList.toggle('hidden');
  arrowDownShare.classList.toggle('hidden');
  contentShare.classList.toggle('hidden');
}
arrowUpShare.addEventListener ('click', collapsibleShare);
arrowDownShare.addEventListener ('click', collapsibleShare);


//create card button

const cardLink = document.querySelector ('.js-cardCreationLink');
const creationBtn = document.querySelector ('.sharecard');
function createCard () {
  cardLink.classList.toggle ('hidden');
  creationBtn.classList.toggle ('pressedButton');
}
creationBtn.addEventListener ('click', createCard);