'use strict';

const arrowIconDown = document.querySelector('.js-arrowdown');
const arrowIconUp = document.querySelector('.js-arrowup');
const collapsibleContent = document.querySelector('.js-collapsibleContainer');

function showContent () {
  arrowIconUp.classList.add('hidden');
  arrowIconDown.classList.remove('hidden');
  collapsibleContent.classList.remove('hidden');
}

function hideContent () {
  arrowIconUp.classList.remove('hidden');
  arrowIconDown.classList.add('hidden');
  collapsibleContent.classList.add('hidden');
}

arrowIconUp.addEventListener ('click', showContent);
arrowIconDown.addEventListener ('click', hideContent);

