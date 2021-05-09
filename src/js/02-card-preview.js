'use strict';

const inputValueName = document.querySelector('.js-inputname');
const cardName = document.querySelector('.js-previewname');

function handleNameChange(event) {
  const inputValue2 = event.currentTarget.Value;
  cardName.innerHTML = inputValue2;
}

inputValueName.addEventListener('change', handleNameChange);

/* change en el input de job title:

const jobInput = document.querySelector ('.js-inputjobtitle');
const jobCard = document.querySelector ('.js-previewjob');

function handlerInputChange (event) {
  const inputValue =  jobInput.value;
  const jobInput = event.currentTarget.Value;
  jobCard.innerHTML = jobInput;

}
jobInput.addEventListener ("change", handlerInputChange);
*/
