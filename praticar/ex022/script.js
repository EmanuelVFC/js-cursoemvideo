let txt_num = window.document.getElementById('inum')
let num = Number(txt_num.value)
let dados = []
let local = window.document.getElementById('ilista')

function adicionar(){
    if (num >= 1 && num <= 100 && dados.indexOf(num) != -1){
        dados.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado.`
        local.appendChild(item)
    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
}