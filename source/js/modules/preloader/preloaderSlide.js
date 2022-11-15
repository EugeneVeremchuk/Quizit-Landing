import { gsap } from 'gsap'

export function preloaderSlide() {

  const logo = document.getElementById('logo')
  const preloaderLogo = preloader.querySelector('#lth-logo')
  const logoSlideParent = document.querySelector('.preloader-slide')
  const logoSlideImage = document.getElementById('LogoSlide')

  logo.style.opacity = 0

  setTimeout(() => logoSlideParent.style.display = 'block', 2000)
  setTimeout(() => logoSlideImage.style.display = 'none', 5000)
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

  logoSlideParent.style.top = ` ${preloaderLogoDimensions.top}px `
  logoSlideParent.style.left = ` ${preloaderLogoDimensions.left}px `
  logoSlideImage.style.width = ` ${preloaderLogoDimensions.width}px `
  logoSlideImage.style.height = ` ${preloaderLogoDimensions.height}px `

  gsap.to(logoSlideParent, { delay: 3.1, duration: 1.2, ease: "power4.out", top: logoDimensions.top, left: logoDimensions.left })
  gsap.to(logoSlideImage, { delay: 3.1, duration: 1.2, ease: "power4.out", width: logoDimensions.width, height: logoDimensions.height })

}