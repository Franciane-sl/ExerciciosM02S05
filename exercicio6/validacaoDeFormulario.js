const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const erroEmail = document.querySelector("#erroEmail");
const erroSenha = document.querySelector("#erroSenha");

function validarEmail() {
  if (!email.value.includes("@")) {
    erroEmail.textContent = "E-mail deve conter '@'";
  } else {
    erroEmail.textContent = "";
  }
}

function validarSenha() {
  if (senha.value.length < 6) {
    erroSenha.textContent = "Senha deve ter no mínimo 6 caracteres";
  } else {
    erroSenha.textContent = "";
  }
}


email.addEventListener("input", validarEmail);
email.addEventListener("blur", validarEmail);

senha.addEventListener("input", validarSenha);
senha.addEventListener("blur", validarSenha);


document.querySelector("#formulario").addEventListener("submit", function (e) {
  validarEmail();
  validarSenha();

  if (erroEmail.textContent !== "" || erroSenha.textContent !== "") {
    e.preventDefault(); 
  }
});
