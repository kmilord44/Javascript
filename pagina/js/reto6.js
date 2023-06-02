//acceder al formulariuo
let form = document.getElementById("frmvalidacion");
let fed1 = document.querySelector("#documento  .feedback");
let fed2 = document.querySelector("#name  .feedback2");
let fed3 = document.querySelector("#apellido  .feedback3");
let fed4 = document.querySelector("#correo  .feedback4");
let fed5 = document.querySelector("#contrasena  .feedback5");
let fed6 = document.querySelector("#contrasena2  .feedback6");


//establecer reglas de validacion
const $number = /[0-9]{1,15}/;
const $nlastn = /^[a-z  A-Z Ññ \s \D]{1,25}/;
const $correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const $contra = /^[a-z  A-Z Ññ \s \D]{10,40}/;


//TIPO DOCUMENTO
form.docu.addEventListener(`input`, (e) => {
  e.preventDefault();

  if ($number.test(e.target.value)) {
    form.docu.setAttribute("class", "success");
    fed1.style.setProperty("visibility", "hidden");
    fed1.style.setProperty("opacity", "0");
  } else {
    form.docu.setAttribute("class", "error");
    fed1.textContent =
      "solo puedes digitar valores numericos de 1 a 15 valores";
    fed1.style.setProperty("visibility", "visible");
    fed1.style.setProperty("opacity", "1");
  }
});

//NOMBRE

form.nombre.addEventListener(`input`, (a) => {
  a.preventDefault();

  if ($nlastn.test(a.target.value)) {
    form.nombre.setAttribute("class", "success");
    fed2.style.setProperty("visibility", "hidden");
    fed2.style.setProperty("opacity", "0");
  } else {
    form.nombre.setAttribute("class", "error");
    fed2.textContent = "no puedes agregar valores especiales ni numeros";
    fed2.style.setProperty("visibility", "visible");
    fed2.style.setProperty("opacity", "1");
  }
});

//APELLIDO

form.apellido.addEventListener(`input`, (i) => {
  i.preventDefault();

  if ($nlastn.test(i.target.value)) {
    form.apellido.setAttribute("class", "success");
    fed3.style.setProperty("visibility", "hidden");
    fed3.style.setProperty("opacity", "0");
  } else {
    form.apellido.setAttribute("class", "error");
    fed3.textContent = "no puedes agregar valores especiales ni numeros";
    fed3.style.setProperty("visibility", "visible");
    fed3.style.setProperty("opacity", "1");
  }
});

//CORREO

form.correoo.addEventListener(`input`, (o) => {
  o.preventDefault();

  if ($correo.test(o.target.value)) {
    form.correoo.setAttribute("class", "success");
    fed4.style.setProperty("visibility", "hidden");
    fed4.style.setProperty("opacity", "0");
  } else {
    form.correoo.setAttribute("class", "error");
    fed4.textContent = "correo invalido";
    fed4.style.setProperty("visibility", "visible");
    fed4.style.setProperty("opacity", "1");
  }
});

//CONTRASE;A

form.password.addEventListener(`input`, (c) => {
  c.preventDefault();

  if ($contra.test(c.target.value)) {
    form.password.setAttribute("class", "success");
    fed5.style.setProperty("visibility", "hidden");
    fed5.style.setProperty("opacity", "0");
  } else {
    form.password.setAttribute("class", "error");
    fed5.textContent = "la contraseña debe de tener entre 10 a 45 caracteres";
    fed5.style.setProperty("visibility", "visible");
    fed5.style.setProperty("opacity", "1");
  }
});

//VERIFY CONTRASENA

form.password2.addEventListener(`input`, (c1) => {
  c1.preventDefault();

  if ($contra.test(c1.target.value)) {
    form.password2.setAttribute("class", "success");
    fed6.style.setProperty("visibility", "hidden");
    fed6.style.setProperty("opacity", "0");
  } else {
    form.password2.setAttribute("class", "error");
    fed6.textContent = "no puedes agregar valores especiales ni numeros";
    fed6.style.setProperty("visibility", "visible");
    fed6.style.setProperty("opacity", "1");
  }
});

// 4 VALIDACION CAMPOS VACIOS
form.addEventListener(`submit`, (e) => {
  e.preventDefault(); //DETENER PROPAGACION

  const docu = form.docu.value;
  const nombre = form.nombre.value;
  const apellido = form.apellido.value;
  const correoo = form.correoo.value;
  const password = form.password.value;
  const password2 = form.password2.value;



  if (docu== 0 || docu==null) {
    alert(`debe ingresar un numero de documento`)
    form.docu.focus()
    form.docu.setAttribute("class","error")    
  }

  else if (nombre== 0 || nombre==null) {
    alert(`debe ingresar un nombre`)
    form.nombre.focus()
    form.nombre.setAttribute("class","error")    
  }

  else if (apellido== 0 || apellido==null) {
    alert(`debe ingresar un apellido`)
    form.apellido.focus()
    form.apellido.setAttribute("class","error") 
    
  }  
  else if (correoo== 0 || correoo==null) {
    alert(`debe ingresar un correo`)
    form.correoo.focus()
    form.correoo.setAttribute("class","error") 
  }

  else if (password== 0 || password==null) {
    alert(`debe ingresar una contraseña`)
    form.password.focus()
    form.password.setAttribute("class","error") 
  }

  else if (password2== 0 || password2==null) {
    alert(`debe ingresar una contraseña`)
    form.password2.focus()
    form.password2.setAttribute("class","error") 
  }
  else if (docu != 0 && docu!= null && nombre!= 0 && nombre!=null && apellido!= 0 && apellido!=null && correoo!= 0 && correoo!=null && password!= 0 && password!=null && password2!= 0 && password2!=null) {

    form.submit() //RENAUDAR EL ENVIO DEL FORMULARIO
    alert("datos enviados")
    }
}
)