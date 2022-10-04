
const root = document.querySelector(':root')
const theme = document.querySelector('.theme')

theme.classList.add('dark')
let condition = 'dark'

function themeAnimation(event) {

  const border = this.querySelector('#border-rotate')
  const circle = this.querySelector('#circle')

  const lock = () => {
    root.style.setProperty('--mask-theme', 'block')
  }

  const unlock = () => {
    root.style.setProperty('--mask-theme', 'none')
  }

  const animation = () => {
    border.classList.toggle('animate-border')
    circle.classList.toggle('animate-circle')
  }

  lock()

  switch (condition) {
    case 'dark':
      burger.classList.remove('dark')
      burger.classList.add('light')
      condition = 'light'
      animation()
      break
    case 'light':
      burger.classList.remove('light')
      burger.classList.add('dark')
      condition = 'dark'
      animation()
      break
    default: console.warn('Please set condition for a theme icon')
  }

  setTimeout(unlock, 500)

}

export default themeAnimation;