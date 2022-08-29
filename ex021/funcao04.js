function fatorial (x){
    var c = 0
    do{
        c = x
        x--
        res = c * x
    }while (x >= 1)
    return res
}

console.log(fatorial(5))