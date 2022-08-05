function carregar(){
    var msg = window.document.getElementById('imsg')
    var foto = window.document.getElementById('inoite')
    var data_atual = new Date()
    var titulo = window.document.getElementById('ititulo')
    // var hora_atual = data_atual.getHours()
    var hora_atual = 15

    if (hora_atual <= 12){
        titulo.innerHTML = "Hora do Dia"
        foto.style.border = '3px solid #e2cd9f'
        document.body.style.backgroundColor = "#e2cd9f"
        foto.src = 'images/manhã.jpg'
        msg.innerHTML = `Bom dia. Agora são ${hora_atual} horas(s).`
    }else{
        if (hora_atual <= 18){
            titulo.innerHTML = "Hora da Tarde"
            foto.style.border = '3px solid #b9846f'
            document.body.style.backgroundColor = "#b9846f"
            foto.src = 'images/tarde.jpg'
            msg.innerHTML = `Boa tarde. Agora são ${hora_atual} horas(s).`
        }else{
            titulo.innerHTML = "Hora da Noite"
            foto.style.border = '3px solid #515154'
            document.body.style.backgroundColor = "#515154"
            foto.src = 'images/noite.jpg'
            msg.innerHTML = `Boa noite. Agora são ${hora_atual} horas(s).`
        }
    }
}