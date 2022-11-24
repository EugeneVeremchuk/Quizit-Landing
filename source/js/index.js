import engineScroll from './modules/engineScroll.js'
import { deviceDetection } from './modules/deviceDetection.js'
import { menuInterface } from './modules/menuInterface.js'
import { logoAnimation } from './animation/logos/logo.js'
import { preloader, hidePreloader, preloaderAnimationTiming } from './modules/preloader.js'

function index() {

  deviceDetection()
  menuInterface()
  logoAnimation()


  preloader()
  setTimeout(() => {
    engineScroll()
    hidePreloader()
  }, preloaderAnimationTiming.hidePreloader)

}

document.addEventListener('DOMContentLoaded', index)