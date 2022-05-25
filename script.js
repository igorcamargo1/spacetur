const Enviar = document.getElementById("enviar")

Enviar.addEventListener("submit", ()=>{

   const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='date'],select[option],textarea")
    

     for(let x = 0; x < campos.length ; x++){
           
        if(campos[x].value == ""){
            alert("Os campos estãos sem preenchimentos!")
            return               
        }else{
            alert("Todos os campos foram preenchidos")
            return
        }
    }
})