const header = document.querySelector('.js-header')
const title = header.querySelector('.js-title')
const subtitle = header.querySelector('.js-subtitle')
const walk = 20

header.addEventListener('mousemove', shadow)

function shadow (e) {
  const { offsetWidth: width, offsetHeight: height } = header

  let { offsetX: x, offsetY: y } = e

  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width) * walk - walk / 2)
  const yWalk = Math.round((y / height) * walk - walk / 2)

  title.style.transform = `translateX(${xWalk}px) translateY(${yWalk}px)`
  subtitle.style.transform = `translateX(${xWalk}px) translateY(${yWalk}px)`
}
