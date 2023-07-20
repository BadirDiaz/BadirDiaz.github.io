function aleatorio (min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

let variableAleatorio = 0

function iniciarJuego(){

    let botonNumero = document.getElementById("boton-numero")
    botonNumero.addEventListener("click", fizz)   
}

function fizz () {
    variableAleatorio=aleatorio(1,100)
    let spanNumero = document.getElementById("span-numero")
    spanNumero.innerHTML = variableAleatorio
    let spanPalabra = document.getElementById("span-palabra")
    let residuo1 = (variableAleatorio%3)
    let residuo2 = (variableAleatorio%5)

    if (residuo1==0 && residuo2==0)
    {
        spanPalabra.innerHTML = "FIZZ BUZZ"
    } else if (residuo1==0)
    {
        spanPalabra.innerHTML = "FIZZ"
    } else if (residuo2==0)
    {
        spanPalabra.innerHTML = "BUZZ"
    } else {
        spanPalabra.innerHTML="No entra en la categoria"
    }

    }

window.addEventListener("load", iniciarJuego)