"use strict";

const buttons = document.querySelectorAll(".js-input-design");
console.log(buttons);
//const button2 = document.querySelector('.js-input2');
//const button3 = document.querySelector('.js-input3');

function changecolor() {
  //const selectedButton = event.currentTarget;
  const selectedButton = document.querySelector(".js-input-design:checked");

  const card = document.querySelector(".js-card");
  card.classList.remove("js-color-blue");
  card.classList.remove("js-color-orange");

  /*console.log(selectedButton.value);
  if (selectedButton.value === "green") {
  } else if (selectedButton.value === "orange") {
    card.classList.add("js-color-orange");
  } else {
    card.classList.add("js-color-blue");
  }*/

  if (selectedButton === buttons[0]) {
  } else if (selectedButton === buttons[1]) {
    card.classList.add("js-color-orange");
  } else if (selectedButton === buttons[2]) {
    card.classList.add("js-color-blue");
  }
}

changecolor();

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", changecolor);
  console.log(button);
}

/*for (const button of buttons) {
    
}*/

//button1.addEventListener('click', changecolor);
//button2.addEventListener('click', changecolor);
//button3.addEventListener('click', changecolor);
