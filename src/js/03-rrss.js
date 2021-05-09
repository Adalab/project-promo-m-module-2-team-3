const inputEmail = document.querySelector ('.js-inputEmail');
const linkEmail = document.querySelector('.js-linkMail');

function handleLinksEmail (event){
    const inputEmailValue = event.currentTarget.value;
    linkEmail.href =  inputEmailValue;
}

inputEmail.addEventListener('change', handleLinksEmail);

const inputIn = document.querySelector ('.js-inputIn');
const linkIn = document.querySelector('.js-linkIn');

function handleLinksIn (event){
    const inputInValue = event.currentTarget.value;
    linkIn.href =  inputInValue;
}

inputIn.addEventListener('change', handleLinksIn);

const inputGit = document.querySelector ('.js-inputGit');
const linkGit = document.querySelector('.js-linkGit');

function handleLinksGit (event){
    const inputGitValue = event.currentTarget.value;
    linkGit.href =  inputGitValue;
}

inputGit.addEventListener('change', handleLinksGit);

const inputTel = document.querySelector('.js-inputTel');
const linkTel = document.querySelector('.js-linkTel');

function handleLinksTel (event){
    const inputTelValue = event.currentTarget.value;
    linkTel.href =  inputTelValue;
}

inputTel.addEventListener('change', handleLinksTel);

