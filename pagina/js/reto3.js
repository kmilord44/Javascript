function calcular2(m1) {
    m1.preventDefault()
    

let m11=parseInt(document.getElementById("m1").value)
let m22=parseInt(document.getElementById("m2").value)
let m33=parseInt(document.getElementById("m3").value)


if (m11==m22 && m11==m33) {
alert(`todas las medidas son iguales, tu triangulo es EQUILATERO`)
        
}else if (m11==m22 || m11==m33 || m22==m33) {
    alert(`dos de las medidas son iguales, tu triangulo es isósceles`)
    
}else if (m11!=m22 && m11!=m33 & m22!=m33) {
    alert(`todas las medidas son diferentes, tu triangulo es ESCALENO`)
}
}