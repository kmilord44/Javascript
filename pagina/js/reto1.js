function calcular(e) {
    e.preventDefault()
    
   
 // entrada 
 let p=document.getElementById("p").value
 let op=parseInt(document.getElementById("op").value)

 
if (op==1) {
        
        alert(`su longitud es ${p.length}`)
    }
        
    else if (op==2){
        alert(p.toUpperCase())
    }
       
    else if (op==3){
        alert(p.toLowerCase())
    }

    else if (op==4){
        alert(p.charAt(0));
    }
}