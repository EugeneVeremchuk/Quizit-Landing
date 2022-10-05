import burgerAnimation from './../animation/icons/burger.js';
import themeAnimation from './../animation/icons/theme.js';
import soundAnimation from './../animation/icons/sound.js';

const $burger = document.querySelector('.menu__button')
const $burgerButton = document.querySelector('.menu__button-wrapper')
const $theme = document.querySelector('#Theme')
const $sound = document.querySelector('#Sound')
const $menuInterface = document.querySelector('.menu__interface')

const mouseover = () => $burgerButton.classList.add('hover')
const mouseout = () => $burgerButton.classList.remove('hover')
const mousedown = () => $burgerButton.classList.add('active')
const mouseup = () => $burgerButton.classList.remove('active')

if (document.body.classList.contains('_pc')) {
  $burger.addEventListener('mouseover', mouseover)
  $burger.addEventListener('mouseout', mouseout)
}

// if (document.body.classList.contains('_mobile')) {
//   $burger.addEventListener('mousedown', mousedown)
//   $burger.addEventListener('mouseup', mouseup)
// } else {
//   $burger.addEventListener('mouseover', mouseover)
//   $burger.addEventListener('mouseout', mouseout)
// }

let condition = 'hide'
$menuInterface.classList.add('hide')

$burgerButton.addEventListener('click', function (event) {

  burgerAnimation()

  switch (condition) {
    case 'hide':
      condition = 'show'
      mousedown()
      $burgerButton.nextElementSibling.style.cssText = 'display: none'
      $menuInterface.classList.remove('hide')
      $menuInterface.classList.add('show')
      break
    case 'show':
      condition = 'hide'
      mouseup()
      $burgerButton.nextElementSibling.style.cssText = 'display: block'
      $menuInterface.classList.remove('show')
      $menuInterface.classList.add('hide')
      break
    default: console.warn('Please set condition for a menu interface')
  }

})
$theme.addEventListener('click', themeAnimation)
$sound.addEventListener('click', soundAnimation)