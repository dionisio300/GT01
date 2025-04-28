function mandar_mensagem(){
    alert('Essa é a mensagem') 
}

//Função com parâmetros sem retorno
function mandarMensagemPersonalizada(nome, idade){
    alert(`Seja bem-vindo ${nome}, sua idade é ${idade}`)
}

//Função com parâmetros e com retorno
function somar_numeros(n1, n2){
    let soma = n1 + n2
    return soma
}

// 2. Crie uma função que receba um número e retorne se ele é par ou ímpar.
function verificar_paridade(numero){
    if(numero % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

//4. Crie uma função que receba um número de 1 a 7 e retorne o dia da semana correspondente.

function verificar_faixa_etaria(idade){
    if(idade > 0 && idade <=12){
        return 'Criança'
    }else if(idade > 12 && idade <=17){
        return 'Adolescente'
    }else if(idade > 17 && idade <= 59){
        return 'Adulto'
    }else{
        return 'idoso'
    }
}

function depositar_valor(deposito, saldo){
    saldo += deposito
    return saldo
}

function sacar_valor(saque,saldo){
    if(saldo >= saque){
        saldo -= saque
        alert('Saque realizado com sucesso')
        return saldo
    }else{
        alert('Saldo insuficiente')
        return saldo
    }
}

function mostrar_saldo(saldo){
    alert(`Seu saldo é ${saldo}`)
}