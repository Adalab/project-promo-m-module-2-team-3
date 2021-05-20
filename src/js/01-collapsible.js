'use strict';

function handleCollapsibles(event) {
  let selectedSection = event.target.closest('.js-section');
  for (const collapsibleSection of collapsibleSections) {
    if (selectedSection === collapsibleSection) {
      collapsibleSection.classList.toggle('active');
    } else {
      collapsibleSection.classList.remove('active');
    }
  }
}

for (const arrow of arrows) {
  arrow.addEventListener('click', handleCollapsibles);
}
