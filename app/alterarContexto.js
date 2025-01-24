function alterarContexto(contexto) {
    mostrarTempo()
    html.setAttribute('data-contexto', contexto)//trocar o fundo
    img_banner.setAttribute('src', `/imagens/${contexto}.png`)//trocar o banner

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')//Remove o destaque do botão
    })

    switch (contexto) {//Trocar o titulo
        case 'foco':
           
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break

        case 'descanso-curto':
           
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break

        case 'descanso-longo':
           
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break
    }
}