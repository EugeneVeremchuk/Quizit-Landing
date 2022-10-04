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
    tlOpen.to("#top", { duration: .1, ease: "power4.out", y: 105 })
    tlOpen.to("#crossMaskRect", { duration: .1, transformOrigin: "50% 50%", ease: "power4.out", height: "0" }, "+=20%")
    tlOpen.to("#bottom", { y: -5, transformOrigin: "50% 50%", scale: 0, autoAlpha: 0 }, 0)
    tlOpen.to("#top", { duration: .1, ease: "power4.out", y: -100 })
    tlOpen.to("#crossMaskRect", { duration: .1, ease: "power4.out", height: "100%" })
    tlOpen.to('#cross-1', { duration: 1, ease: "bounce.out", y: -30, rotate: 50, transformOrigin: "50% 50%" }, "-=50%")
    tlOpen.to('#cross-2', { duration: 1, ease: "bounce.out", y: -30, rotate: -50, transformOrigin: "50% 50%" }, "<")
    return tlOpen
  }

  function animationClose() {
    const tlClose = gsap.timeline({ onStart: lock, onComplete: unlock })
    tlClose.to("#top", { duration: .1, ease: "power4.out", y: 105 })
    tlClose.to("#crossMaskRect", { duration: .1, transformOrigin: "50% 50%", ease: "power4.out", height: "0" }, "+=20%")
    tlClose.to("#bottom", { duration: .1, y: -5, transformOrigin: "50% 50%", scale: 1, autoAlpha: 1 }, 0)
    tlClose.to('#cross-1', { duration: 0, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" })
    tlClose.to('#cross-2', { duration: 0, ease: "bounce.out", y: 0, rotate: 0, transformOrigin: "50% 50%" })
    tlClose.to("#top", { duration: .1, ease: "elastic.out(1, 0.4)", y: 0 })
    tlClose.to("#crossMaskRect", { duration: .1, ease: "power4.out", height: "100%" })
    tlClose.to("#bottom", { duration: 0, y: 0, }, "<")
    return tlClose
  }

  switch (condition) {
    case 'open':
      burger.classList.remove('open')
      setTimeout(() => burger.classList.add('close'), 200)
      condition = 'close'
      animationOpen()
      break
    case 'close':
      setTimeout(() => {
        burger.classList.remove('close')
        burger.classList.add('open')
      }, 100)
      condition = 'open'
      animationClose()
      break
    default: console.warn('Please set condition for a burger icon')
  }

}

export default burgerAnimation;