
function somar(){

    const n1 = Number(document.getElementById("n1").value) // essa função recupera o valor de um input, de um elemento na tela
    const n2 = Number(document.getElementById("n2").value)
    
    const soma = n1 + n2
   
   document.getElementById("resSom").innerHTML = "O resultado da soma é " + soma
   
     }

     function subtrair(){
      const n1 = Number(document.getElementById("n1").value)
      const n2 = Number(document.getElementById("n2").value)
      const subtrair = n1 - n2
      document.getElementById("resSub").innerHTML = "O resultado da subtração é " + subtrair
  
     }
      
     function multiplicar(){
      const n1 = Number(document.getElementById("n1").value)
      const n2 = Number(document.getElementById("n2").value)
      const multiplicar = n1 * n2
      document.getElementById("resMult").innerHTML = "O resultado da multiplicação é " + multiplicar
     }

     function dividir(){
      const n1 = Number(document.getElementById("n1").value)
      const n2 = Number(document.getElementById("n2").value)
      const dividir = n1 / n2
      document.getElementById("resDiv").innerHTML = "O resultado da divisão é " + dividir
     }