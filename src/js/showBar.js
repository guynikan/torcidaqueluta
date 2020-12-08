;(function () {
  let leftBorder, rightBorder, bottomBorder, windowHeight

  function init () {
    leftBorder = document.querySelectorAll('.hiddenLeftBorder')
    rightBorder = document.querySelectorAll('.hiddenRightBorder')
    bottomBorder = document.querySelectorAll('.hiddenBottomBorder')

    console.log(bottomBorder)
    windowHeight = window.innerHeight
  }

  function checkPosition () {
    leftBorder.forEach(element => {
      let positionFromTop = element.getBoundingClientRect().top

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('showLeftBorder')
        element.classList.remove('hiddenLeftBorder')
      }
    })
    rightBorder.forEach(element => {
      let positionFromTop = element.getBoundingClientRect().top

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('showRightBorder')
        element.classList.remove('hiddenRightBorder')
      }
    })
    bottomBorder.forEach(element => {
      let positionFromTop = element.getBoundingClientRect().top

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('showBottomBorder')
        element.classList.remove('hiddenBottomBorder')
      }
    })
  }

  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init)

  init()
  checkPosition()
})()
