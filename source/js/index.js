import burgerAnimation from './animation/icons/burger.js';
// import themeAnimation from './animation/icons/theme.js';
// import soundAnimation from './animation/icons/sound.js';

const burger = document.querySelector('.menu__button')
const button = document.querySelector('.menu__button-wrapper')
button.addEventListener('click', burgerAnimation)

burger.addEventListener('mouseover', function (event) {
  button.classList.add('hover')
})

burger.addEventListener('mouseout', function (event) {
  button.classList.remove('hover')
})

burger.addEventListener('mousedown', function (event) {
  button.classList.add('active')
})

burger.addEventListener('mouseup', function (event) {
  button.classList.remove('active')
})

// const theme = document.querySelector('#Theme')
// theme.addEventListener('click', themeAnimation)

// const sound = document.querySelector('#Sound')
// sound.addEventListener('click', soundAnimation)

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };




