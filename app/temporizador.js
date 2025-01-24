const contagemRegressiva = () => {
    if (temporizador <= 0) {
        // musica_end.play()
        alert('Tempo Finalizado')
        zerar()
        return
    }
    temporizador -= 1
    mostrarTempo()

}

function iniciar_pausar() {
    if (intervalo) {
        musica_pause.play()
        zerar()
        return
    }
    if (temporizador == 0) {
        temporizador = intervaloInicial
        
    }
    musica_start.play()
    intervalo = setInterval(contagemRegressiva, 1000)
    pausar_design()
}

function zerar() {
    clearInterval(intervalo)
    play_design()
    intervalo = null
}

function pausar_design() {
    botao_iniciarPausar.textContent = "Pausar"
    img_pausarIniciar.setAttribute('src', '/imagens/pause.png')
}
function play_design() {
    botao_iniciarPausar.textContent = "Começar"
    img_pausarIniciar.setAttribute('src', '/imagens/play_arrow.png')
}


function mostrarTempo(){
    const tempo = new Date(temporizador * 1000)
    const tempo_formatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second:'2-digit'})
    tempo_tela.innerHTML = `${tempo_formatado}`
}

