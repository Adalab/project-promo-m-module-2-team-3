'use strict';

//collapsibles
const arrows = document.querySelectorAll('.js-arrow');
const creationBtn = document.querySelector('.js-buttoncreate');
const collapsibleSections = document.querySelectorAll('.js-section');

//design
const buttons = document.querySelectorAll('.js-input-design');

//form

const userData = {
  name: '',
  job: '',
  email: '',
  linkedin: '',
  phone: '',
  github: '',
  palette: 1,
  photo: '',
};

const cardName = document.querySelector('.js-previewname');
const form = document.querySelector('.js-form');
const cardJob = document.querySelector('.js-previewjob');
const cardEmail = document.querySelector('.js-linkEmail');
const cardTel = document.querySelector('.js-linkTel');
const cardLinkedin = document.querySelector('.js-linkIn');
const cardGitHub = document.querySelector('.js-linkGit');

//reset button
const resetButton = document.querySelector('.js-reset-button');
