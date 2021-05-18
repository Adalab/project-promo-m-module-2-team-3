'use strict';

function handleCollapsibles(event) {
  /*let selectedSection = event.target.closest('.js-section');
  if (selectedSection === collapsibleSections[0]) {
    selectedSection.classList.toggle('active');
    collapsibleSections[1].classList.remove('active');
    collapsibleSections[2].classList.remove('active');
  } else if (selectedSection === collapsibleSections[1]) {
    selectedSection.classList.toggle('active');
    collapsibleSections[0].classList.remove('active');
    collapsibleSections[2].classList.remove('active');
  } else if (selectedSection === collapsibleSections[2]) {
    selectedSection.classList.toggle('active');
    collapsibleSections[0].classList.remove('active');
    collapsibleSections[1].classList.remove('active');
  }*/

  // 1º Todo cerrado >>> abrir el clickado
  // 2º Un abierto >>> cerrarlo y abrir el clickado
  // 3º Cualquier cosa >>> cerrarlos todos meno el actual y intercambio el actual

  let selectedSection = event.target.closest('.js-section');
  for (const collapsibleSection of collapsibleSections) {
    console.log(collapsibleSection);
    if (selectedSection === collapsibleSection) {
      collapsibleSection.classList.toggle('active');
    } else {
      collapsibleSection.classList.remove('active');
    }
  }
  // for
  // if si es el actual >>> intercambio
  // else sino >>> lo cierro
}

for (const arrow of arrows) {
  arrow.addEventListener('click', handleCollapsibles);
}

//create card button
function handleButtonLink(event) {
  const selectedSection = event.target.closest('.collapsible');
  selectedSection.classList.toggle('showLink');
}
creationBtn.addEventListener('click', handleButtonLink);
