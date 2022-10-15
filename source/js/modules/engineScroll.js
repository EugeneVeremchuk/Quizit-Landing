
let zSpacing = -1000
let zValues = []
let lastPosition = zSpacing / 5
const $frames = document.querySelectorAll('.frame')

function engineScroll(event) {
  
  let top = document.documentElement.scrollTop
  console.log('top', top)
  let delta = lastPosition - top
  console.log('delta', delta)
  lastPosition = top
  console.log('lastPos', lastPosition)
  
  $frames.forEach((frame, index) => {
    zValues.push((index * zSpacing) + zSpacing)
    zValues[index] += delta * -5.5
    let transfrom = `translateZ(${zValues[index]}px)`
    let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
    frame.setAttribute('style', `transform: ${transfrom}; opacity: ${opacity}`)
  })

}

window.addEventListener('scroll', function(event) {
  console.log(document.documentElement.scrollTop)
})

//window.scrollTo(0, 10)


