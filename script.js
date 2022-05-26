/* função validar */

function validar(){
    //pegando o valor pelos nomes

    var nome = document.getElementById("nmId")
    var sobrenome = document.getElementById("sobrenomeId")
    var email = document.getElementById("emailId")
    var cpf = document.getElementById("cpfId")
    var genero = document.getElementById("generoId")
    var data = document.getElementById("dateId")
    var motivo = document.getElementById("motivoId")
   

    // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (cpf.value == "") {
    alert("Senha não informada");
    cpf.focus();
    return;
  }
  if (genero.value == "") {
    alert("Telefone não informado");
    genero.focus();
    return;
  }
  if (data.value == "") {
    alert("CEP não informado");
    data.focus();
    return;
  }
  if (motivo.value == "") {
    alert("CEP não informado");
    motivo.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}
