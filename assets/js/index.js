const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const situacaoSelect = document.querySelector("situacao");
const mensagemTextArea = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se o nome tá vazio
  if(nameInput.value === ""){
    alert('Preencha o campo nome');
    return;
  }

  // verificar se o email ta vazio e validar
  if(emailInput === "" || !isMailValid(emailInput.value)){
    alert('Preencha o email corretamente');
    return;
  }

  // vericar senha
  if(!isSenhaValid(senhaInput.value, 6)){
    alert('Sua senha precisa ter no minimo 6 caracteres');
    return;
  }

  // enviar o form se tudo tiver ok
  form.submit();
});

// função que valida o email
const isMailValid = (email) => {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)){
    return true;
  }else{
    return false;
  }
}

const isSenhaValid = (senha, min) => {
  // se a senha for menor que 6 caracteres
  if(senha.length >= min){
    return true;
  }else{
    return false;
  }
}
