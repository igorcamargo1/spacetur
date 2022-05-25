const Enviar = document.getElementById("enviar")

Enviar.addEventListener("click", ()=>{

   const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='date'],select[option],textarea")
    

     for(let x = 0; x < campos.length ; x++){

           
        if(campos[x].value == ""){
            alert("Os campos estão vazios! Preencha todos correntamente")
            return false            
        }else{
            alert("Campos preenchidos ☻")
            return true
        }
    }
})