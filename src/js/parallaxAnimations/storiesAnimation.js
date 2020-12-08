if (document.title.includes('Torcida')) {
  const content = document.querySelector('.js-content')
  const storyItem = document.querySelectorAll('.js-story-item')
  const walk = 20

  content.addEventListener('mousemove', shadow)

  function shadow (e) {
    const { offsetWidth: width, offsetHeight: height } = content

    let { offsetX: x, offsetY: y } = e

    if (this !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }

    const xWalk = Math.round((x / width) * walk - walk / 2)
    const yWalk = Math.round((y / height) * walk - walk / 2)

    storyItem.forEach((item, index) => {
      item.style.transform = `translateX(${xWalk *
        (index + 1)}px) translateY(${yWalk * (index + 1)}px)`
    })
  }
}
