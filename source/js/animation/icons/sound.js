import KUTE from 'kute.js'

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
    line.classList.add('line')
    KUTE.to('#condition', { path: '#on' }, { delay: 100, duration: 0.2, easing: 'easingCubicIn' }).start()
    KUTE.to('#outerRing', { attr: { cx: 108.83, r: 96.33 } }, { delay: 100, duration: 200, easing: 'easingCubicIn' }).start()
    KUTE.to('#innerRing', { attr: { cx: 108.83, r: 59.67 } }, { duration: 200, easing: 'easingCubicIn' }).start()
  }

  function animationOff() {
    KUTE.to('#condition', { path: '#off' }, { delay: 300, duration: 0.2, easing: 'easingCubicIn' }).start()
    KUTE.to('#outerRing', { attr: { cx: 50, r: 80 } }, { delay: 100, duration: 200, easing: 'easingCubicIn' }).start()
    KUTE.to('#innerRing', { attr: { cx: 50, r: 45 } }, { duration: 200, easing: 'easingCubicIn' }).start()
    setTimeout(() => { line.classList.remove('line') }, 350)
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

  setTimeout(unlock, 500)

}

export default soundAnimation;

