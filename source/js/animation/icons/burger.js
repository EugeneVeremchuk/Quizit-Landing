import { gsap } from 'gsap';

const root = document.querySelector(':root')
const burger = document.querySelector('.burger')

burger.classList.add('open')
let condition = 'open'

function burgerAnimation(event) {

  const lock = () => {
    root.style.setProperty('--mask-burger', 'block')
  }

  const unlock = () => {
    const reset = () => {
      const top = burger.querySelector('#top')
      const bottom = burger.querySelector('#bottom')
      top.style = ''
      bottom.style = ''
    }
    root.style.setProperty('--mask-burger', 'none')
    reset()
  }

  function animationOpen() {
    const tlOpen = gsap.timeline({ onStart: lock, onComplete: unlock })
    tlOpen.to("#top", { duration: .2, ease: "power1.inOut", y: 55 })
    tlOpen.to("#bottom", { duration: .2, y: -55, }, "<")
    tlOpen.to("#bottom", { duration: .1, ease: "power1.inOut", transformOrigin: "50% 50%", scale: 0, autoAlpha: 0 })
    tlOpen.to("#top", { duration: .2, ease: "power1.inOut", y: -100 })
    tlOpen.to('#middle1', { duration: 1, ease: "bounce.out", y: -30, rotate: 50, transformOrigin: "50% 50%" }, "-=20%")
    tlOpen.to('#middle2', { duration: 1, ease: "bounce.out", y: -30, rotate: -50, transformOrigin: "50% 50%" }, "<")
    return tlOpen
  }

  function animationClose() {
    const tlClose = gsap.timeline({ onStart: lock, onComplete: unlock })
    tlClose.to('#middle1', { duration: 1, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" })
    tlClose.to('#middle2', { duration: 1, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" }, "<")
    tlClose.to("#top", { duration: .2, ease: "power1.inOut", y: 55 }, "<")
    tlClose.to("#bottom", { duration: .1, ease: "power1.inOut", transformOrigin: "50% 50%", scale: 1, autoAlpha: 1 })
    tlClose.to("#top", { duration: .2, ease: "power1.inOut", y: 0 })
    tlClose.to("#bottom", { duration: .2, y: 0, }, "-=70%")
    return tlClose
  }

  switch (condition) {
    case 'open':
      burger.classList.remove('open')
      setTimeout(() => burger.classList.add('close'), 1000)
      condition = 'close'
      animationOpen()
      break
    case 'close':
      setTimeout(() => {
        burger.classList.remove('close')
        burger.classList.add('open')
      }, 1000)
      condition = 'open'
      animationClose()
      break
    default: console.warn('Please set condition for a burger icon')
  }

}

export default burgerAnimation;