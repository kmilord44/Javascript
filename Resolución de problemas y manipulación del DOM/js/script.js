console.log("oli desde afuera_:D")
let numberOne, numberTwo, name="camilo", age=17, state=true, iva=19;
console.log(`mi nombre es ${name} y tengo ${age} años, el iva de mi edad es ${(age*19)/100}.`);

numberOne=prompt("Ingrese su primer numero")
numberTwo=prompt("Ingrese su segundo numero")




//let tot=parseInt(numberOne)+parseInt(numberTwo)

//alert("la suma es "+tot);
//console.log(`la suma es ${tot}.`);




//condicionales

if (numberOne>numberTwo) {
   alert(`el numero mayor es ${numberOne}.`) 
   console.log(`el numero mayor es ${numberOne}.`)

} else if (numberOne===numberTwo){
console.log(`son iguales ${numberTwo}.`)
alert(`son iguales ${numberTwo}.`)

} else { 
    alert(`el numero mayor es ${numberTwo}.`) 
    console.log(`el numero mayor es ${numberTwo}.`)
}


/* Variacion condicional doble OPERADOR TERNARIO*/
let numMayor=(numberOne>numberTwo)
?"El numero mayor es el primero" //si la condicion es verdadera//
:"El numero mayor es el segundo" //si la condicion no se cumple

console.log(numMayor) 


