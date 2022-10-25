import './modules/deviceDetection.js'
import './modules/menuInterface.js'
import engineScroll from './modules/engineScroll.js'
// import loaderAnimation from './animation/logos/icon.js'
import logoAnimation from './animation/logos/logo.js'
import logoTextHAnimation from './animation/logos/logotexth.js'
// import logoTextVAnimation from './animation/logos/logotextv.js'

logoAnimation()
logoTextHAnimation()

const preloader = document.querySelector('.preloader')

setTimeout(() => {
  preloader.classList.add('hidden')
}, 3000)


