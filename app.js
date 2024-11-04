const containerNumeros = document.getElementById("containerNumeros")
const buttonMostrarNumeros = document.getElementById("buttonMostrarNumeros")
const buttonMostrarNumerosTres = document.getElementById("buttonMostrarNumerosTres")
const containerNumerosTres = document.getElementById("containerNumerosTres")
function imprimirNumeros(idContainer, step, botao){
   const container = document.getElementById(idContainer)
   if (container.innerHTML === ''){
      for (i = step; i <= 100; i+= step){
         container.innerHTML += `<p>${i}</p>`
      }
      botao.innerText = 'Esconder'
   } else {container.innerHTML = ''; botao.innerText = 'Mostrar'}
}

function imprimirSoma(idContainer, botao){
   soma = 0
   const container = document.getElementById(idContainer)
   if (container.innerHTML === ''){
      for(i = 50; i <= 100; i+=2){
         soma += i
      }
      container.innerHTML = soma
      botao.innerText = 'Esconder'
   } else {container.innerHTML = ''; botao.innerText = 'Mostrar'}
}

function mediaPonderada(n1,n2,n3,p1,p2,p3){
   alert((n1*p1+n2*p2+n3*p3)/(p1+p2+p3))
}

function fatorial(numero){
   if (numero <= 0){
      return 1
   }
   return numero * fatorial(numero-1)
}


function fibonacci(){
   quantidade = document.getElementById('inputNumeroFibonacci').value
   container = document.getElementById('containerFibonacci')
   if (quantidade <= 1){
      container.innerHTML = '1'
   } else if (quantidade == 2){
      container.innerHTML = '1 1'
   }
   else{
      sequencia = [1,1]
      for (i = 1; i < quantidade-1; i++){
         num = sequencia[i-1] + sequencia[i]
         sequencia.push(num)
      }
      container.innerHTML = sequencia.toString()
   }
}

function calcularIntervalo(primeiro, ultimo){
   if (primeiro > ultimo){
      temp = primeiro 
      primeiro = ultimo 
      ultimo = temp   
   }
   soma = 0 
   for (i = parseInt(primeiro); i <= parseInt(ultimo); i++){
      soma += i
   }
   return soma
}

function mostrarSequencia(){
   numero = document.getElementById('inputX').value
   string_numero = '' 
   while (numero != 2){
      switch (numero%2) {
         case 0:
            numero = numero/2
            break
         case 1:
            numero = numero*3 + 1
         break;
      }
      string_numero += `${numero} ? `
   } 
   string_numero += '1'
   alert(string_numero)
}

function mostrarSequenciaIf(){
   numero = document.getElementById('inputX').value
   string_numero = '' 
   while (numero != 2){
      if (numero%2 == 0){
         numero = numero/2
      } else {numero = numero*3 + 1}
      string_numero += `${numero} ? `
   }
   string_numero += '1'
   alert(string_numero)
}