function verificar(){
    var ano_nascimento_txt = window.document.getElementById('iano')
    var ano_nasc = Number(ano_nascimento_txt.value)

    var data = new Date()
    var ano_atual = data.getFullYear()

    var idade = ano_atual - ano_nasc

    var sexo = window.document.getElementsByName('sexo')
    var genero = ""

    if (ano_nascimento == 0 || ano_nascimento > ano_atual){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }else{
        if (sexo[0].checked){
            genero = ""
        }
    }
}
