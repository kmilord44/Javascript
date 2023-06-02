function calcular3(nombre) {
    nombre.preventDefault()
    
   
 // entrada 
 let nombre1=parseInt(document.getElementById("nombre").value)
 let apellido1=parseInt(document.getElementById("apellido").value)
 let act1=parseInt(document.getElementById("act").value)

 if (nombre1=="1" && apellido1=="1" && act1=="1") {
        alert(`CORRECTO)`)

}
else if (nombre1=="2" && apellido1=="2" && act1=="2") {
        alert(`CORRECTO`)
}
else if (nombre1=="3" && apellido1=="3" && act1=="3") {
        alert(`CORRECTO`)
}

else if (nombre1=="4" && apellido1=="4" && act1=="4") {
        alert(`CORRECTO`)
}

else if (nombre1=="5" && apellido1=="5" && act1=="5") {
        alert(`CORRECTO`)
}

else if (nombre1=="6" && apellido1=="6" && act1=="6") {
        alert(`CORRECTO`)
}

else {
        alert(`INCORRECTO:D`)
}
}
