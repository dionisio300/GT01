function calcular_imc(altura, peso){
    let imc = peso/(altura*altura)
    return imc
}

const calculoImc = function(altura, peso){
    let imc = peso/(altura*altura)
    return imc
}

const converterTemperatura = (tc) => (tc*(9/5)) + 32

const classificarIdade = (idade,nome) => {
    if(idade>=18){
        return `${nome} é adulto`
    }else{
        return `${nome} não é adulto`
    }
}







