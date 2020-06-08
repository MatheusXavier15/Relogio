function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Manhaformatada.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'Tardeformatada.png'
        document.body.style.backgroundColor = '#b9846f'
    }
    else {
        img.src = 'Noiteformatada.png'
        document.body.style.backgroundColor = '#515154'
    }
}
function relogio(){
    var data = new Date()
    var Horas = data.getHours()
    var Minutos = data.getMinutes()
    var Segundos = data.getSeconds()

    if(Horas < 10){
        Horas = '0'+Horas
    } else if(Minutos < 10){
        Minutos = '0'+Minutos
    } else if(Segundos < 10){
        Segundos = '0'+Segundos
    }
    window.document.getElementById('relogio').innerHTML= `${Horas}:${Minutos}:${Segundos}`
}
window.setInterval('relogio()', 1000)