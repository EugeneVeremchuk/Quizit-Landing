import { gsap } from 'gsap';

function logoTextHAnimation() {

  const tl = gsap.timeline({ delay: .5 })
  tl.to('.border', { duration: 1, ease: "elastic.out(1, 0.4)", border: 20 })
  tl.to('.border__cover', { duration: 1, ease: "elastic.out(1, 0.4)", border: 20 }, "<")
  tl.fromTo('#lth-blue', { scale: 0, translateX: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0 }, "<")
  tl.fromTo('#lth-red', { scale: 0, translateX: 100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0 }, "<")
  tl.fromTo('#lth-yellow', { scale: 0, translateY: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateY: 0 }, "<")
  tl.fromTo('#lth-lightBlue', { scale: 0, translateX: 100, translateY: -100 }, { duration: 1, ease: "elastic.out(1, 0.3)", opacity: 1, scale: 1, translateX: 0, translateY: 0 }, "<")
  tl.fromTo('#lth-text', { opacity: 0, translateX: -200 }, {duration: 1, ease: "expo.out", transformOrigin: "50% 50%", opacity: 1, translateX: 0 }, "-=50%")

}

export default logoTextHAnimation;