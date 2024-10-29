const containerNumeros = document.getElementById("containerNumeros")
const buttonMostrarNumeros = document.getElementById("buttonMostrarNumeros")
const buttonMostrarNumerosTres = document.getElementById("buttonMostrarNumerosTres")
const containerNumerosTres = document.getElementById("containerNumerosTres")
function imprimirNumeros(step){
   if (buttonMostrarNumeros.innerText != 'Esconder Números' && step == 1) {
      for (i = 1; i <= 100; i+=1){
         containerNumeros.innerHTML += `<p>${i}</p>`
         buttonMostrarNumeros.innerText = 'Esconder Números'
      }
   } else if (buttonMostrarNumeros.innerText == 'Esconder Números' && step == 1){
      containerNumeros.innerHTML = ''
      buttonMostrarNumeros.innerText = 'Mostrar Números'
   }
   else if (buttonMostrarNumerosTres.innerText != "Esconder Números" && step == 3){
      for (i = 3; i <= 100; i+=3){
         containerNumerosTres.innerHTML += `<p>${i}</p>`
         buttonMostrarNumerosTres.innerText = 'Esconder Números'
      }
   } else if (buttonMostrarNumerosTres.innerText == 'Esconder Números' && step == 3){
      containerNumerosTres.innerHTML = ''
      buttonMostrarNumerosTres.innerText = 'Mostrar Números'
   }
}



