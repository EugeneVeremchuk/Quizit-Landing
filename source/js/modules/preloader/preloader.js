
import { gsap } from 'gsap'
import { preloaderSlide } from './preloaderSlide.js'
import logoTextHAnimation from '../../animation/logos/logotexth.js'

export function preloader() {

  const preloader = document.querySelector('.preloader')
  const border = document.querySelector('.border')

  logoTextHAnimation()

  setTimeout(() => {
    gsap.to('.preloader__border', { duration: 1, ease: "elastic.out(1, 0.4)", border: 20 })
    gsap.to('.preloader__border-cover', { duration: 1, ease: "elastic.out(1, 0.4)", border: 20 })
  }, 500)

  setTimeout(() => {
    preloader.classList.add('hidden')
  }, 3000)

}