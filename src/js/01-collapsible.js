'use strict';

//design section
const designSection = document.querySelector ('.js-design');
const fillSection = document.querySelector ('.js-fill');
const shareSection = document.querySelector ('.js-share');


function showContent (event) {
  const arrowUp = event.target.closest ('.js-arrowUp');
  const arrowDown = event.target.closest ('.js-arrowDown');
  const content = event.target.closest ('.js-collapsibleContainer');
  if (arrowUp.classList ('.hidden')) {
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
shareSection.addEventListener ('click', showContent);


