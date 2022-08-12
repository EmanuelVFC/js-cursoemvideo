function verificar(){
    if (ano_nascimento == 0 || ano_nascimento > ano_atual){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }else{
        var ano_nascimento_txt = window.document.getElementById('iano')
        var ano_nasc = Number(ano_nascimento_txt.value)

        var data = new Date()
        var ano_atual = data.getFullYear()

        var idade = ano_atual - ano_nasc

        var sexo = window.document.getElementsByName('sexo')
        var genero = ""
        var fase_vida = ""

        var resposta = window.document.getElementById('itexto')

        if (sexo[0].checked){
            genero = "Homem"
        }else if (sexo[1].checked){
            genero = "Mulher"
        }

        if (idade > 0 && idade <= 5){
            fase_vida = "Bebê"
            
        }else if (idade <= 12){
            fase_vida = "Criança"
            
        }else if (idade <= 16){
            fase_vida = "Adolescente"
            
        }else if (idade <= 25){
            fase_vida = "Jovem"
            
        }else if (idade <= 60){
            fase_vida = "Adulto"

        }else if (idade <= 130){
            fase_vida = "Idoso"

        }
    }
}