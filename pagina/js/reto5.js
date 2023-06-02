// P circulo
let btnmodal = document.querySelector(".abrirmodal");
let ventanamodal1 = document.getElementById("ventanamodal");
let closemodal = document.querySelectorAll(".cerrarmodal");

btnmodal.addEventListener("click", () => {
  ventanamodal1.style.display = "block";
});

closemodal.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodal1.style.display = "none";
  });
});


// P triangulo
let btnmodaltr = document.querySelector(".abrirmodaltr");
let ventanamodaltr = document.getElementById("ventanamodaltr");
let closemodaltr = document.querySelectorAll(".cerrarmodaltr");

btnmodaltr.addEventListener("click", () => {
  ventanamodaltr.style.display = "block";
});

closemodaltr.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodaltr.style.display = "none";
  });
});


// P cuadrado
let btnmodalcu = document.querySelector(".abrirmodalcu");
let ventanamodalcu = document.getElementById("ventanamodalcu");
let closemodalcu = document.querySelectorAll(".cerrarmodalcu");

btnmodalcu.addEventListener("click", () => {
  ventanamodalcu.style.display = "block";
});

closemodalcu.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalcu.style.display = "none";
  });
});


// P rectangulo
let btnmodalre1 = document.querySelector(".abrirmodalre");
let ventanamodalre1 = document.getElementById("ventanamodalre");
let closemodalre1 = document.querySelectorAll(".cerrarmodalre");

btnmodalre1.addEventListener("click", () => {
  ventanamodalre1.style.display = "block";
});

closemodalre1.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalre1.style.display = "none";
  });
});


//modales area


//circulo
let btnmodalacir1 = document.querySelector(".abrirmodala1");
let ventanamodalacir = document.getElementById("ventanamodalcia");
let closemodalacir = document.querySelectorAll(".cerrarmodalcia");

btnmodalacir1.addEventListener("click", () => {
  ventanamodalcia.style.display = "block";
});

closemodalacir.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalcia.style.display = "none";
  });
});


//triangulo
let btnmodalatr = document.querySelector(".abrirmodala2");
let ventanamodalatr1 = document.getElementById("ventanamodalatr");
let closemodalatr1 = document.querySelectorAll(".cerrarmodalatr");

btnmodalatr.addEventListener("click", () => {
  ventanamodalatr1.style.display = "block";
});

closemodalatr1.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalatr1.style.display = "none";
  });
});

//cuadrado
let btnmodalacu = document.querySelector(".abrirmodala3");
let ventanamodalacu1 = document.getElementById("ventanamodalacu");
let closemodalacu1 = document.querySelectorAll(".cerrarmodalacu");

btnmodalacu.addEventListener("click", () => {
  ventanamodalacu1.style.display = "block";
});

closemodalacu1.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalacu1.style.display = "none";
  });
});

//rectangulo
let btnmodalare = document.querySelector(".abrirmodala4");
let ventanamodalare1 = document.getElementById("ventanamodalare");
let closemodalare1 = document.querySelectorAll(".cerrarmodalare");

btnmodalare.addEventListener("click", () => {
  ventanamodalare.style.display = "block";
});

closemodalare1.forEach((element) => {
  element.addEventListener("click", () => {
    ventanamodalare.style.display = "none";
  });
});


















//PERIMETROS

//circulo
function calcularpcir(r) {
    r.preventDefault()
    

let r1=parseInt(document.getElementById("r").value)

res=(r1*2)*3.1416

alert(`el perimetro de su circulo es ${res}`)
}

//triangulo
function calcularptri(m) {
  m.preventDefault()
  
let m1=parseInt(document.getElementById("m").value)
let m2=parseInt(document.getElementById("m2").value)
let m3=parseInt(document.getElementById("m3").value)

let res=m1+m2+m3

alert(`el perimetro de su triangulo es ${res}`)
}

//cuadrado
function calcularpcua(mc1) {
  mc1.preventDefault()
  
  let m1=parseInt(document.getElementById("mc1").value)
  let res=m1*4

alert(`el perimetro de su cuadrado es ${res}`)
  

}

//rectangulo
function calcularprect(mr1) {
  mr1.preventDefault()
  
  let mr11=parseInt(document.getElementById("mre1").value)
  let mr22=parseInt(document.getElementById("mre2").value)

  let res=mr11*mr22

  alert(`el perimetro de su rectangulo es ${res}`)

}



//AREAS

//circulo
function calcularacir(rac) {
  rac.preventDefault()
  

let r1=parseFloat(document.getElementById("rac").value)

res=r1*r1
rest=res*3.14

alert(`el area de su circulo es ${rest}`)
}

//triangulo
function calcularatri(b) {
b.preventDefault()

let b1=parseInt(document.getElementById("b").value)
let h1=parseInt(document.getElementById("h").value)


let res=(b1*h1)/2

alert(`el area de su triangulo es ${res}`)
}

//cuadrado
function calcularacu(mca1) {
mca1.preventDefault()

let m1=parseInt(document.getElementById("mca1").value)
let res=m1*m1

alert(`el area de su cuadrado es ${res}`)


}

//rectangulo
function calculararect(mrea) {
mrea.preventDefault()

let mrea11=parseInt(document.getElementById("mrea").value)
let mrea22=parseInt(document.getElementById("mrea1").value)

let res=mrea11*mrea22

alert(`el perimetro de su rectangulo es ${res}`)

}

