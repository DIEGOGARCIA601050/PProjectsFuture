let ataqueJugador
let ataqueEnemigo = aleatorio(1,3)

let vidas_enemigo = 3
let vidas_jugador = 3

function iniciarJuego() {
    let seccionAtaque = document.getElementById("seleccionar ataque")
    seccionAtaque.style.display = "none"

    let botonMascota = document.getElementById("Seleccionar")
    botonMascota.style.display = "block"
    botonMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("Ataque1")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("Ataque2")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("Ataque3")
    botonTierra.addEventListener("click", ataqueTierra)

}

function seleccionarMascotaJugador() {
    if(Hipodoge.checked||Ratigueya.checked||Capipepo.checked||Langostelvis.checked||Tucapalma.checked||Pydos.checked) {
    let seccionAtaque = document.getElementById("seleccionar ataque")
    seccionAtaque.style.display = "block" 
    let botonMascota = document.getElementById("seleccionarmascota")
    botonMascota.style.display = "none"
    
    let Hipodoge = document.getElementById("Hipodoge") 
    let Capipepo = document.getElementById("Capipepo")
    let Ratigueya = document.getElementById("Ratigueya")
    let Langostelvis = document.getElementById("Langostelvis")
    let Tucapalma = document.getElementById("Tucapalma")
    let Pydos = document.getElementById("Pydos")
    let spantuMascota = document.getElementById("Tu mascota")

    if (Hipodoge.checked == true) {
        spantuMascota.innerHTML = " Hipodoge"
    } else if (Capipepo.checked == true) {
       spantuMascota.innerHTML = " Capipepo"
    } else if (Ratigueya.checked == true) {
        spantuMascota.innerHTML = " Ratigueya"
    } else if (Langostelvis.checked == true) {
        spantuMascota.innerHTML = " Langostelvis"
    } else if (Tucapalma.checked == true) {
        spantuMascota.innerHTML = " Tucapalma"
    } else if (Pydos.checked == true) {
        spantuMascota.innerHTML = " Pydos"
    }
        else alert("Elige una mascota")

    seleccionarMascotaEnemigo()    
}
}


function seleccionarMascotaEnemigo() {
    let = ataqueAleatorio = aleatorio(1,6)
    let spanlaMascota = document.getElementById("La mascota")

    if(ataqueAleatorio == 1) {
        spanlaMascota.innerHTML = " Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanlaMascota.innerHTML = " Capipepo"
    } else if (ataqueAleatorio == 3) {
        spanlaMascota.innerHTML = " Ratigueya"
    } else if(ataqueAleatorio == 4) {
        spanlaMascota.innerHTML = " Langostelvis"
    } else if(ataqueAleatorio == 5) {
        spanlaMascota.innerHTML = " Tucapalma"
    } else {
        spanlaMascota.innerHTML = " Pydos"
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueDelEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueDelEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueDelEnemigo()
}

function ataqueDelEnemigo() {
    if(ataqueEnemigo == 1) {
        ataqueEnemigo = "Fuego"
    } else if(ataqueEnemigo == 2) {
        ataqueEnemigo = "Agua"
    } else {
    ataqueEnemigo = "Tierra"
    }

    crearMensaje()
}


function crearMensaje() {
    if(vidas_enemigo < 1 || vidas_jugador < 1){
        } else { let seccionMensajes = document.getElementById("mensajes")

        let parrafo = document.createElement("p")
        parrafo.innerHTML = "tu mascota atacó con " + ataqueJugador + " y la mascota de tu enenmigo atacó con " + ataqueEnemigo + " - " + resultados(ataqueEnemigo,ataqueJugador) 

        seccionMensajes.appendChild(parrafo)
    }

}


function resultados(ataqueEnemigo,ataqueJugador) {
    let spanVidasJugador = document.getElementById("vidas_jugador")
    let spanVidasEnemigo = document.getElementById("vidas_enemigo")
    
    if(vidas_enemigo < 1 || vidas_jugador < 1){
        } else if(ataqueJugador == ataqueEnemigo) {
            resultado = "y Empatas😯"
            
        } else if((ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") || (ataqueJugador =="Tierra" && ataqueEnemigo == "Agua")) {
            resultado = "y Ganas🎉"
            vidas_enemigo--
            spanVidasEnemigo.innerHTML = vidas_enemigo 
        } else {
            resultado = "y Pierdes😥"
            vidas_jugador--
            spanVidasJugador.innerHTML = vidas_jugador    
        }
        revisarvidas()        
        return resultado
    }

function revisarvidas() {
    if(vidas_enemigo < 1 || vidas_jugador < 1){
        if(vidas_enemigo == 0) {
            alert("GANASTE")
        } else if(vidas_jugador == 0) {
            alert("PERDISTE")
        }
}
}

function aleatorio(min,max) {
    return Math.round(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)