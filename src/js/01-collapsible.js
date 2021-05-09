'use strict';

/*const designSection = document.querySelector ('.js-design');
const fillSection = document.querySelector ('.js-fill');
const shareSection = document.querySelector ('.js-share');


function showContent (event) {
  const arrowUp = event.target.closest ('.js-arrowUp');
  const arrowDown = event.target.closest ('.js-arrowDown');
  const content = event.target.closest ('.js-collapsibleContainer');
  if (arrowUp.classList.contains ('.hidden')) {
    arrowUp.classList.add ('.hidden');
    arrowDown.classList.remove ('.hidden');
    content.classList.remove ('.hidden');
  } else {
    arrowUp.classList.remove ('.hidden');
    arrowDown.classList.add ('.hidden');
    content.classList.add ('.hidden');
  }
}

designSection.addEventListener ('click', showContent);
fillSection.addEventListener ('click', showContent);
shareSection.addEventListener ('click', showContent);*/

//design section
const arrowUpDesign = document.querySelector ('.js-arrowUpDesign');
const arrowDownDesign = document.querySelector ('.js-arrowDownDesign');
const contentDesign = document.querySelector ('.js-collapsibleContainerDesign');

function showContentDesign () {
  arrowUpDesign.classList.add('hidden');
  arrowDownDesign.classList.remove('hidden');
  contentDesign.classList.remove('hidden');
}

function hideContentDesign () {
  arrowUpDesign.classList.remove('hidden');
  arrowDownDesign.classList.add('hidden');
  contentDesign.classList.add('hidden');
}

arrowUpDesign.addEventListener ('click', showContentDesign);
arrowDownDesign.addEventListener ('click', hideContentDesign);


//fill section
const arrowUpFill = document.querySelector ('.js-arrowUpFill');
const arrowDownFill = document.querySelector ('.js-arrowDownFill');
const contentFill = document.querySelector ('.js-collapsibleContainerFill');

function showContentFill () {
  arrowUpFill.classList.add('hidden');
  arrowDownFill.classList.remove('hidden');
  contentFill.classList.remove('hidden');
}

function hideContentFill () {
  arrowUpFill.classList.remove('hidden');
  arrowDownFill.classList.add('hidden');
  contentFill.classList.add('hidden');
}

arrowUpFill.addEventListener ('click', showContentFill);
arrowDownFill.addEventListener ('click', hideContentFill);


//share section
const arrowUpShare = document.querySelector ('.js-arrowUpShare');
const arrowDownShare = document.querySelector ('.js-arrowDownShare');
const contentShare = document.querySelector ('.js-collapsibleContainerShare');

function showContentShare () {
  arrowUpShare.classList.add('hidden');
  arrowDownShare.classList.remove('hidden');
  contentShare.classList.remove('hidden');
}

function hideContentShare () {
  arrowUpShare.classList.remove('hidden');
  arrowDownShare.classList.add('hidden');
  contentShare.classList.add('hidden');
}

arrowUpShare.addEventListener ('click', showContentShare);
arrowDownShare.addEventListener ('click', hideContentShare);
