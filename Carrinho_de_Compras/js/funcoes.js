function alterar_valor(produto, alterar){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(alterar == '-' && qtd.innerHTML == 0){
        

    } else{
        alterar == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valorTotal = qtd.innerHTML * somente_numeros(valor.innerHTML)
        total.innerHTML = formatar_valor(valorTotal)
        
    }
    somar()
    
}

function somar(){
    let soma = 0
    for(let i = 1 ; i < 4 ; i++){
        let numeros = somente_numeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numeros)

    }
    document.getElementById('subtotal').innerHTML = formatar_valor(soma)
}

function somente_numeros(n){
    return n.replace(/\D/g, '')
}

function formatar_valor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}