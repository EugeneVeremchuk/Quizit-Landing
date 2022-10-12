
let zSpacing = -1000
let zValues = []
let lastPosition = zSpacing / 5
const $frames = document.querySelectorAll('.frame')
const frames = Array.from($frames)


function engineScroll(event) {
  
  let top = document.documentElement.scrollTop
  let delta = lastPosition - top
  lastPosition = top
  
  frames.forEach((element, index) => {
    zValues.push((index * zSpacing))
    zValues[index] += delta * -3
    let frame = frames[index]
    let transfrom = `translateZ(${zValues[index]}px)`
    let opacity = zValues[index] < Math.abs(zSpacing) / 1.5 ? 1 : 0
    frame.setAttribute('style', `transform: ${transfrom}; opacity: ${opacity}`)
  })

}

window.addEventListener('scroll', engineScroll)

window.scrollTo(0, 1)
