import './modules/deviceDetection.js'
import './modules/menuInterface.js'
import engineScroll from './modules/engineScroll.js'
// import loaderAnimation from './animation/logos/icon.js'
import logoAnimation from './animation/logos/logo.js'
import logoTextHAnimation from './animation/logos/logotexth.js'
// import logoTextVAnimation from './animation/logos/logotextv.js'
import { gsap } from 'gsap'


document.addEventListener('DOMContentLoaded', function (event) {

  logoAnimation()
  logoTextHAnimation()

  const preloader = document.querySelector('.preloader')
  const logo = document.getElementById('logo')
  const preloaderLogo = preloader.querySelector('#lth-logo')
  const preloaderSlideParent = document.querySelector('.preloader-slide')
  const preloaderSlideImage = document.getElementById('LogoSlide')
  const border = document.querySelector('.border')

  logo.style.opacity = 0

  setTimeout(() => preloaderSlideParent.style.display = 'block', 2000)
  setTimeout(() => preloaderSlideParent.style.display = 'none', 5000)
  setTimeout(() => logo.style.opacity = 1, 5000)

  const preloaderLogoDimensions = {
    width: preloaderLogo.getBoundingClientRect().width,
    height: preloaderLogo.getBoundingClientRect().height,
    top: preloaderLogo.getBoundingClientRect().top,
    left: preloaderLogo.getBoundingClientRect().left
  }

  const logoDimensions = {
    width: logo.getBoundingClientRect().width,
    height: logo.getBoundingClientRect().height,
    top: logo.getBoundingClientRect().top,
    left: logo.getBoundingClientRect().left
  }

  preloaderSlideParent.style.top = ` ${preloaderLogoDimensions.top}px `
  preloaderSlideParent.style.left = ` ${preloaderLogoDimensions.left}px `
  preloaderSlideImage.style.width = ` ${preloaderLogoDimensions.width}px `
  preloaderSlideImage.style.height = ` ${preloaderLogoDimensions.height}px `

  gsap.to(preloaderSlideParent, { delay: 3.1, duration: 1.2, ease: "power4.out", top: logoDimensions.top, left: logoDimensions.left })
  gsap.to(preloaderSlideImage, { delay: 3.1, duration: 1.2, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })

  setTimeout(() => {
    engineScroll()
  }, 3000)

  setTimeout(() => {
    preloader.classList.add('hidden')
  }, 3000)

  preloader.addEventListener('transitionend', function() {
    console.log(border.style.zIndex = 4000)
  })

})


