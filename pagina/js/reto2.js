function calcular(P) {
    P.preventDefault()
    
   
 // entrada 
 let p=parseInt(document.getElementById("p").value)
 let op=parseInt(document.getElementById("op").value)
 let oop=parseInt(document.getElementById("oop").value)

 if (op=="2" && oop=="1") {
        // de grados celsius a fahrenheit
        let deCaF=(1.8*p)+32
        alert(`su temperatura en gradosfahrenheit es  ${deCaF}`)

}else if (op=="2" && oop=="3") {
         // de grados celsius a kelvin
      let deCaK=(p+273)
        alert(`su temperatura en grados kelvin es ${deCaK}`)
    
} else if (op=="3" && oop=="1") {
        // de grados kelvin a fahrenheit 
        let deKaF=((p-273.15)*1.8)+32
        alert(`su temperatura en grados fahrenheit es ${deKaF}`)
 
} else if (op=="3" && oop=="2") { 
       //de grados kelvin a celsius 
       let deKaC=p-273.15
       alert(`su temperatura en grados celsius es ${deKaC}`)
       

} else if (op=="1" && oop=="2") {
        // de grados fahrenheit a celsius 
        let deFaC=(p-32)/1.8
        alert(`su temperatura en grados celsius es ${deFaC}`)

} else if (op=="1" && oop=="3") {

        // de grados fahrenheit a kelvin 
        let deFaK= (p-32)*(5/9)+273.15

        alert(`sus temperatura en grados kelvin es ${deFaK}`)
}
}