/* let name, age
name=prompt("ingrese su nombre")
age=parseInt(prompt("ingrese su edad"))

let agein=age+15
 
alert(name+" tienes "+age+ " años, en 15 años tendras "+agein)
console.log(`${name} tienes ${age} años, en 15 años tendras ${agein}`);
*/

let seleccion, tipodoc="ti", numdoc="12345", name="fulanito", lastname="perez", continuar=1

while (continuar===1) {
seleccion=parseInt(prompt("seleccione que desea hacer: 1. Ingresar estudiante 2. Ver estudiante 3. Modificar estudiante"))



switch (seleccion) {
    
    case 1:
    
    name=prompt("ingrese su nombre")
    lastname=prompt("ingrese su apellido")
    tipodoc=prompt("ingrese su tipo de documento")
    numdoc=prompt("ingrese su numero de documento")

    alert ("usuario registrado")
    console.log(`usuario registrado`)
        break;

    
    case 2:
    
    alert (`el estudiante ${name} ${lastname} identificado con ${tipodoc} NO. ${numdoc}`)
        break;

    
    case 3:
    let select
    select=parseInt(prompt("que desea modificar: 1. nombre 2. apellido 3. tipo de documento 4. numero documento"))
    
    switch (select) {
        case 1:
        name=prompt("ingrese el nuevo nombre")
        alert(`sus datos son: el estudiante ${name} ${lastname} identificado con ${tipodoc} NO. ${numdoc}`)

        break;
        
        case 2:
            lastname=prompt("ingrese el nuevo apellido")
            alert(`sus datos son: el estudiante ${name} ${lastname} identificado con ${tipodoc} NO. ${numdoc}`)
            break;

        case 3:
            tipodoc=prompt("ingrese el nuevo tipo de documento")
            alert(`sus datos son: el estudiante ${name} ${lastname} identificado con ${tipodoc} NO. ${numdoc}`)
            break;

        case 4:
            numdoc=prompt("ingrese el nuevo numero de documento")
            alert(`sus datos son: el estudiante ${name} ${lastname} identificado con ${tipodoc} NO. ${numdoc}`)
            break;

        default:
            alert(`seleccion invalida`)
            break;
    } 



        break;

    default:
        alert(`opcion invalida`)
        break;

    }
continuar=parseInt(prompt(`desea repetir? 1.si 2.no`))

}   
