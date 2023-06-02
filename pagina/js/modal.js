let btnmodal=document.getElementById("abrirmodal")

let ventanamodal=document.getElementById("ventanamodal")

let cerrarp=document.querySelector(".cerrarmodal")


//mostrar la ventana modal

btnmodal.addEventListener("dblclick", ()=>{
    ventanamodal.style.display="block"
})


closemodal.addEventListener("click", ()=>{
    ventanamodal.style.display="none"
})