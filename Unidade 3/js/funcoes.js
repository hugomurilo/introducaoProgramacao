//função de declaração: tem o termo função e o nome a que ela se refere
//uma função é chamada, é invocada. Portanto, nunca executará o código se não for chamada. 

function calcular(operacao){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    let resultado 
    switch (operacao) {
        case '+' : resultado = somar(n1, n2); break;
        case '-' : resultado = subtrair(n1, n2); break;
        case '*' : resultado = multiplicar(n1, n2); break;
        case '/' : resultado = dividir(n1, n2)

    }
    document.getElementById('resultado').innerHTML = "O resultado é " + resultado
    
}
function somar(n1, n2){
    return Number(n1) + Number(n2)
    // o código return é o último a ser lido. Caso seja a primeira linha, todo o restante não será lido

    }
    
function subtrair(n1, n2){
    return Number(n1) - Number(n2)
    
       }
        
function multiplicar(n1, n2){
    return Number(n1) * Number(n2)    
       }
  
function dividir(n1, n2){
    if(n2 == 0){
        console.error("Não é possível dividir por zero!")
        return null
    } else{
    return Number(n1) / Number(n2) 
    }
       }

// outra forma de escrever função: é a função de expressão, uma função sem nome atribuída a uma variável
const somaExpressao = function(n1, n1){
    return n1 + n2
}
somaExpressao (n1, n2)

// arrow function: função de seta. 
const somaArrow = n1 => {
    return n1 * 4
}

// se for dois parâmetros:
const somaArrowII = (n1 , n2) => {
    return n1 + n2
}

// se usar o parênteses não precisa do return:
const somaArrowIII = (n1, n2) => ( 
    n1 + n2
    )
/* Se for uma função de uma única linha pode deixar da seguinte forma:

const somaArrowIII = (n1, n2) => n1 + n2

*/
