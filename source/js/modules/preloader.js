
import { gsap } from 'gsap'
import { logoTextHAnimation } from '../animation/logos/logotexth.js'
import { logoTextVAnimation } from '../animation/logos/logotextv.js'

const mediaQuery = window.matchMedia("(min-width: 501px)")
const preloaderType = mediaQuery.matches

const $preloader = document.getElementById('preloader')
const $preloaderContainer = document.getElementById('preloaderContainer')
const $preloaderHorizontal = document.getElementById('preloaderH')
const $preloaderVertical = document.getElementById('preloaderV')

function preloaderSlide() {

  const $logo = document.getElementById('logo')
  const $logoSlide = document.getElementById('preloaderSlide')
  const $logoSlideImage = document.getElementById('LogoSlide')

  let $preloaderLogo = null
  if (preloaderType) {
    $preloaderLogo = document.getElementById('lth-logo')
  } else {
    $preloaderLogo = document.getElementById('ltv-logo')
  }

  const dimensions = (isExec) => {

    const logoDimensions = {
      width: $logo.getBoundingClientRect().width,
      height: $logo.getBoundingClientRect().height,
      top: $logo.getBoundingClientRect().top,
      left: $logo.getBoundingClientRect().left
    }

    const preloaderLogoDimensions = {
      width: $preloaderLogo.getBoundingClientRect().width,
      height: $preloaderLogo.getBoundingClientRect().height,
      top: $preloaderLogo.getBoundingClientRect().top,
      left: $preloaderLogo.getBoundingClientRect().left
    }

    if (!isExec) return { logoDimensions, preloaderLogoDimensions }

    $logoSlide.style.top = ` ${preloaderLogoDimensions.top}px `
    $logoSlide.style.left = ` ${preloaderLogoDimensions.left}px `
    $logoSlideImage.style.width = ` ${preloaderLogoDimensions.width}px `
    $logoSlideImage.style.height = ` ${preloaderLogoDimensions.height}px `

  }

  const logoSlideSetting = () => {
    $logo.style.display = 'none'
    $logoSlide.style.display = 'none'

    dimensions(true)

    const resizeObserver = (event) => {
      dimensions(true)
    }
    window.addEventListener('resize', resizeObserver)

    setTimeout(() => $logoSlide.style.display = 'block', 2000)
    setTimeout(() => {
      $logoSlide.style.display = 'none'
      $logo.style.display = 'block'
    }, 5000)
  }

  const { logoDimensions } = dimensions(false)

  const logoSlideAnimation = () => {
    console.log(logoDimensions, 'sync')

    gsap.to($logoSlide, { delay: 3.1, duration: 1.2, ease: "power4.out", top: logoDimensions.top, left: logoDimensions.left })
    gsap.to($logoSlideImage, { delay: 3.1, duration: 1.2, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })

    const resizeObserver = (event) => {
      const { logoDimensions } = dimensions(false)
      console.log(logoDimensions, 'async')
      gsap.to($logoSlideImage, { delay: 3.1, duration: .1, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })
    }
    window.addEventListener('resize', resizeObserver)

  }

  logoSlideSetting()
  logoSlideAnimation()

}

export function preloader() {

  const preloaderSetting = () => {

    const $border = document.getElementById('border')
    const border = window.getComputedStyle($border, null).getPropertyValue('border-width').slice(0, -2)
    const borderWidth = Number(border)

    const borderAnimation = () => {
      gsap.to('.preloader__border', { duration: 1, delay: .07, ease: "elastic.out(1, 0.4)", borderWidth: borderWidth })
      gsap.to('.preloader__border-cover', { duration: 1, ease: "elastic.out(1, 0.4)", borderWidth: borderWidth })
    }

    $preloader.dataset.status = 'visible'
    $preloaderContainer.dataset.status = 'visible'

    $preloaderHorizontal.dataset.status = 'none'
    $preloaderVertical.dataset.status = 'none'

    if (preloaderType) {
      $preloaderHorizontal.dataset.status = 'block'
    } else {
      $preloaderVertical.dataset.status = 'block'
    }

    setTimeout(() => {
      preloaderType ? logoTextHAnimation() : logoTextVAnimation()
      borderAnimation()
    }, 500)

  }

  preloaderSetting()
  preloaderSlide()

}

export function hidePreloader() {
  $preloaderContainer.dataset.status = 'hidden'
  $preloader.dataset.status = 'hold'
  setTimeout(() => $preloader.dataset.status = 'none', 2000)
}