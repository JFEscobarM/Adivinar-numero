let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMaximo= 10;

function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    
    if(numeroUsuario==numeroSecreto){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos== 1)? 'intento':'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       
    }
    else {
            if(numeroUsuario<numeroSecreto){
            asignarTexto('p','Casi, el numero es mayor')
             }
            else{
            asignarTexto('p','Casi el numero es menor')
        }

        intentos++;
        limpiarCaja();
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function condicinoesIniciales(){
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero entre el 1 y ${numMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}
function reiniciarJuego(){
     //limpiar caja
     limpiarCaja();
     //restablecer mensajes iniciales
     condicinoesIniciales();
     //reiniciar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
     
}

function generarNumeroSecreto(params) {

    let numeroGenerado = (Math.floor(Math.random()*numMaximo)+1)

    console.log(listaNumerosSorteados);
    console.log(numeroGenerado)

    if(listaNumerosSorteados.length == numMaximo){
    asignarTexto('p','Ya se sortearon todos los numero posibles')

    }
    else{
    
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }    
}

condicinoesIniciales();