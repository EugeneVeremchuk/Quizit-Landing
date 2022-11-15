import engineScroll from './modules/engineScroll.js'
import { deviceDetection } from './modules/deviceDetection.js'
import { menuInterface } from './modules/menuInterface.js'
import { logoAnimation } from './animation/logos/logo.js'
import { preloader } from './modules/preloader/preloader.js'

function index() {

  deviceDetection()
  menuInterface()
  logoAnimation()
  preloader()

  setTimeout(() => {
    engineScroll()
  }, 3000)

}

document.addEventListener('DOMContentLoaded', index)