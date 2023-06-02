form.addEventListener(`submit`, (e) => {
  e.preventDefault(); //DETENER PROPAGACION

  const docu = form.docu.value;



  if (docu== 0 || docu==null) {
    alert(`debe ingresar un numero de documento`)
    form.docu.focus()
    form.docu.setAttribute("class","error")    
    
    if (nombre== 0 || nombre==null) {
      alert(`debe ingresar un nombre`)
      form.nombre.focus()
      form.nombre.setAttribute("class","error")    
      
      if (apellido== 0 || apellido==null) {
      alert(`debe ingresar un apellido`)
      form.apellido.focus()
      form.apellido.setAttribute("class","error") 

        if (correoo== 0 || correoo==null) {
        alert(`debe ingresar un correo`)
        form.correoo.focus()
        form.correoo.setAttribute("class","error") 
  
          if (password== 0 || password==null) {
          alert(`debe ingresar una contraseña`)
          form.password.focus()
          form.password.setAttribute("class","error") 
  
            if (password2== 0 || password2==null) {
            alert(`debe ingresar una contraseña`)
            form.password2.focus()
            form.password2.setAttribute("class","error") 

            
            
  }


  if (docu== 0 && docu==null && nombre== 0 && nombre==null && apellido== 0 && apellido==null && correoo== 0 && correoo==null && password== 0 && password==null && password2== 0 && password2==null) {

    form.submit() //RENAUDAR EL ENVIO DEL FORMULARIO
    alert("datos enviados")
    }
  else if{
    alert("xd")
  }

}
)