
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 5) {
        // BOA NOITE!
        bom.innerHTML = 'BOA NOITE!'
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#0B1622'
    } else if (hora > 5 && hora < 12) {
        // BOM DIA!
        bom.innerHTML = 'BOM DIA!'
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#B0C3CA'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        bom.innerHTML = 'BOA TARDE!'
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#799DBB'
    } else if (hora >= 18 && hora < 21) {
        // BOA NOITE/tarde! 
        bom.innerHTML = 'BOA TARDE!'
        img.src = 'imagens/tardezinha.png'
        document.body.style.backgroundColor = '#B65247'
    } else {
        //BOA NOITE!
        bom.innerHTML = 'BOA NOITE!'
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#0B1622'
    }

}

