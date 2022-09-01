let txt_num = window.document.getElementById('inum')
let num = Number(txt_num.value)
let dados = []
let local = window.document.getElementById('ilista')

function adicionar(){
    if (isNumero(num) && !inLista(num, dados)){
        dados.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado.`
        local.appendChild(item)
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar(){
    let final = window.document.getElementById('ifinal')
    let item = document.createElement('div')
    let tamanho = dados.length

    item.text = `Ao todo, temos ${tamanho} números cadastrados.`
    final.appendChild(item)
}

function isNumero(n){
    if (n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(n) == -1){
        return false
    }else{
        return true
    }
}

