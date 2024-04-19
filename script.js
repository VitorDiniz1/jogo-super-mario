const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const pular = () => {
  mario.classList.add('pulo')

  setTimeout(() => {
    mario.classList.remove('pulo')
  }, 500)
}

const rodar = setInterval(() => {
  const posicaoPipe = pipe.offsetLeft
  const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

  if(posicaoPipe <= 120 && posicaoPipe > 0 && posicaoMario < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${posicaoPipe}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`

    mario.src = 'img/imgmario3.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(rodar)
  }
}, 10)

document.addEventListener('keydown', pular)