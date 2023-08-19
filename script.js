'use strict';
const mainDiv = document.querySelector('.drum-kit-main');
const soundMapping = {
  A: 'boom',
  S: 'clap',
  D: 'hihat',
  F: 'kick',
  G: 'openhat',
  H: 'ride',
  J: 'snare',
  K: 'tink',
  L: 'tom',
};

let timeSetFirst;
let timeSetSecond;
let rqdDiv;

const playSound = function (rqd) {
  const tone = new Audio(`sounds/${soundMapping[rqd]}.wav`);
  tone.play();
};

const logicKeyboard = function (e) {
  const rqd = e.key.toUpperCase();
  rqdDiv?.classList.remove('instrument-active');
  clearTimeout(timeSetFirst);
  clearTimeout(timeSetSecond);
  if (rqd) playSound(rqd);
  rqdDiv = document.querySelector(`.${soundMapping[rqd]}`);
  timeSetFirst = setTimeout(() => {
    rqdDiv.classList.add('instrument-active');
  }, 100);
  timeSetSecond = setTimeout(() => {
    rqdDiv.classList.remove('instrument-active');
  }, 400);
};
document.addEventListener('keydown', logicKeyboard);

const logicMouse = function (e) {
  const rqd = e.target.closest('.instrument').dataset.key;
  if (rqd) playSound(rqd);
};
mainDiv.addEventListener('click', logicMouse);
