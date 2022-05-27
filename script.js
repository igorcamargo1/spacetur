const botaoEnviar = document.getElementById("enviar")

botaoEnviar.addEventListener("click", ()=>{
  const campos = document.querySelectorAll("input[type='text'],input[type='email'],select[type='option'],input[type='date'],textarea")

  for(let x = 0; x < campos.length; x++){

    if(campos[x].value == ""){
      alert("O campo " + campos[x].name + " está sem preenchimento!")
      return
    }
  }
  document.getElementsByClassName("formulario")[0].submit()
})