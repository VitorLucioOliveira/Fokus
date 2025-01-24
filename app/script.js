const html = document.querySelector('html')

//Troca de Plano de fundo
const botoes = document.querySelectorAll('.app__card-button')
const botao_foco = document.querySelector('.app__card-button--foco')
const botao_curto = document.querySelector('.app__card-button--curto')
const botao_longo = document.querySelector('.app__card-button--longo')
const img_banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

//Musica
const musica_input = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')
musica.loop = true

//Tempozizador
let temporizador = 1500
let intervalo = null;
let intervaloInicial = 1500
const botao_start = document.getElementById('start-pause')
const musica_start = new Audio('sons/play.wav')
const musica_pause = new Audio('sons/pause.mp3')
const musica_end = new Audio('sons/beep.mp3')
const img_pausarIniciar = document.querySelector(".app__card-primary-butto-icon")
const tempo_tela = document.getElementById('timer')

//
const botao_iniciarPausar = document.querySelector('#start-pause span')

botao_foco.addEventListener('click', () => {
    temporizador = 1500
    intervaloInicial = 1500
    alterarContexto('foco')
    botao_foco.classList.add('active')//adiciona destaque no botão
})

botao_curto.addEventListener('click', () => {
    temporizador = 300
    intervaloInicial = 300
    alterarContexto('descanso-curto')
    botao_curto.classList.add('active')//adiciona destaque no botão
})

botao_longo.addEventListener('click', () => {
    temporizador = 900
    intervaloInicial = 300
    alterarContexto('descanso-longo')
    botao_longo.classList.add('active')//adiciona destaque no botão
})

musica_input.addEventListener('change', () => {
    musica.paused ? musica.play() : musica.pause()
})


botao_start.addEventListener('click', iniciar_pausar)
mostrarTempo()