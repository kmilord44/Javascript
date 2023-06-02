let userv="camilo", passwordv="messielmejor" 
let user, password

user=prompt(`ingrese su usuario`)
password=prompt(`ingrese su contraseña`)

if(password===passwordv && user===userv){
    console.log(`bienvenido a mi app:D ${user}.`)
    alert (`bienvenido ${user}.`)

} else if (password===password && user!=userv){
    console.log(`nombre de usuario invalido`)
    alert (`nombre de usuario invalido`)

} else if (user===userv && password!=passwordv) {
    console.log(`upss, parece que tus datos son incorrectos`)
    alert (`upss, parece que tus datos son incorrectos`)

}


