import { gsap } from 'gsap'

const root = document.querySelector(':root')
const sound = document.querySelector('.sound')

sound.classList.add('off')
let condition = 'off'

function soundAnimation(event) {

  const lock = () => {
    root.style.setProperty('--mask-sound', 'block')
  }

  const unlock = () => {
    root.style.setProperty('--mask-sound', 'none')
  }

  function animationOn() {
    gsap.to('#speaker', { duration: .1, delay: 0, ease: "power1.inOut", translateX: 40 })
    gsap.to('#cross', { duration: .1, delay: 0, ease: "power1.inOut", translateX: -40 })
    gsap.to('#cross', { duration: .1, delay: .2, ease: "power1.inOut", scale: 0 })
    gsap.to('#speaker', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%" })
    gsap.to('#volume', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%", autoAlpha: 1, scale: 1 })
  }

  function animationOff() {
    gsap.to('#speaker', { duration: .1, delay: 0, ease: "power1.inOut", translateX: 40 })
    gsap.to('#volume', { duration: .1, delay: 0, ease: "power1.inOut", translateX: -40 })
    gsap.to('#volume', { duration: .1, delay: .2, ease: "power1.inOut", scale: 0 })
    gsap.to('#speaker', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%" })
    gsap.to('#cross', { duration: .1, delay: .3, ease: "power1.inOut", translateX: "5%", scale: 1 })
  }

  lock()

  switch (condition) {
    case 'off':
      sound.classList.remove('off')
      setTimeout(() => sound.classList.add('on'), 200)
      condition = 'on'
      animationOn()
      break
    case 'on':
      sound.classList.remove('on')
      setTimeout(() => sound.classList.add('off'), 200)
      condition = 'off'
      animationOff()
      break
    default: console.warn('Please set condition for a sound icon')
  }

  unlock()

}

export default soundAnimation;

