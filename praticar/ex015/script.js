function verificar(){
    var ano_nascimento_txt = window.document.getElementById('iano')
    var ano_nasc = Number(ano_nascimento_txt.value)

    var data = new Date()
    var ano_atual = data.getFullYear()

    var idade = ano_atual - ano_nasc

    var sexo_masc = window.document.getElementById('masc')
    var sexo_fem = window.document.getElementById('fem')

    if (ano_nascimento == 0 || ano_nascimento > ano_atual){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }

    if (sexo_masc = 'M' && idade <= 12){
        itexto.innerHTML = `Foi detectado um menino de ${idade} anos!`
        ifoto.src = 'images/kid-man.jpg'
    }else{
        if(sexo_masc = 'M' && idade <= 16){
            itexto.innerHTML = `Foi detectado um adolescente de ${idade} anos!`
            ifoto.src = 'images/adolescente-homem.jpg'
        }else{
            if (sexo_masc = 'M' && idade <= 25){
                itexto.innerHTML = `Foi detectado um jovem de ${idade} anos!`
                ifoto.src = 'images/jovem-homem.jpg'
            }else{
                if (sexo_masc = 'M' && idade <= 55){
                    itexto.innerHTML = `Foi detectado um adulto de ${idade} anos!`
                    ifoto.src = 'images/adulto-homem.jpg'
                }else{
                    if (sexo_masc = 'M' && idade <= 130){
                        itexto.innerHTML = `Foi detectado um idoso de ${idade} anos!`
                        ifoto.src = 'images/velho-homem.jpg'
                    }
                }
            }
        }
    }

    if (sexo_fem = 'F' && idade <= 12){
        itexto.innerHTML = `Foi detectado uma menina de ${idade} anos!`
        ifoto.src = 'images/kid-girl.jpg'
    }else{
        if(sexo_fem = 'F' && idade <= 16){
            itexto.innerHTML = `Foi detectado uma adolescente de ${idade} anos!`
            ifoto.src = 'images/adolescente-mulher.jpg'
        }else{
            if (sexo_fem = 'F' && idade <= 25){
                itexto.innerHTML = `Foi detectado uma jovem de ${idade} anos!`
                ifoto.src = 'images/jovem-mulher.jpg'
            }else{
                if (sexo_fem = 'F' && idade <= 55){
                    itexto.innerHTML = `Foi detectado uma adulta de ${idade} anos!`
                    ifoto.src = 'images/adulto-mulher.jpg'
                }else{
                    if (sexo_fem = 'F' && idade <= 130){
                        itexto.innerHTML = `Foi detectado uma idosa de ${idade} anos!`
                        ifoto.src = 'images/velho-mulher.jpg'
                    }
                }
            }
        }
    }
}
