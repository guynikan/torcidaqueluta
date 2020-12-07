const header = document.querySelector('.js-header')
const title = header.querySelector('.js-title')
const subtitle = header.querySelector('.js-subtitle')
const walk = 20

header.addEventListener('mousemove', shadow)

function shadow (e) {
  //pega o tamanho atual da tela do usuário
  const { offsetWidth: width, offsetHeight: height } = header
  // pega a posição do mouse na posição horizontal(x) e vertical(y)
  let { offsetX: x, offsetY: y } = e

  // quando o mouse estiver passando por cima de um elemento
  // diferente do hero (que é a div)
  // pois quando passo o mouse por cima do elemento
  // h1, ele me dará o x e y dele
  // pois os eventos tem propagation
  if (this !== e.target) {
    // então soma a posição dos eixos, as distâncias que o filho
    // tem do pai, na esquerda e no topo
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  // formula para limitar o máximo e o mínimo de sombra
  // possível.
  const xWalk = Math.round((x / width) * walk - walk / 2)
  const yWalk = Math.round((y / height) * walk - walk / 2)

  title.style.transform = `translateX(${xWalk}px) translateY(${yWalk}px)`
  subtitle.style.transform = `translateX(${xWalk}px) translateY(${yWalk}px)`
}
