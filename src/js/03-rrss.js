const inputEmail = document.querySelector ('.js-inputEmail');
const linkEmail = document.querySelector('.js-linkMail');

function handleLinks (event){
    const inputEmailValue = event.currentTarget.value;
    linkEmail.href =  inputEmailValue;
}

inputEmail.addEventListener('change', handleLinks);

const inputIn = document.querySelector ('.js-inputIn');
const linkIn = document.querySelector('.js-linkIn');

function handleLinks (event){
    const inputInValue = event.currentTarget.value;
    linkIn.href =  inputInValue;
}

inputIn.addEventListener('change', handleLinks);

const inputGit = document.querySelector ('.js-inputGit');
const linkGit = document.querySelector('.js-linkGit');

function handleLinks (event){
    const inputGitValue = event.currentTarget.value;
    linkGit.href =  inputGitValue;
}

inputGit.addEventListener('change', handleLinks);

const inputTel = document.querySelector('.js-inputTel');
const linkTel = document.querySelector('.js-linkTel');

function handleLinks (event){
    const inputTelValue = event.currentTarget.value;
    linkTel.href =  inputTelValue;
}

inputTel.addEventListener('change', handleLinks);

