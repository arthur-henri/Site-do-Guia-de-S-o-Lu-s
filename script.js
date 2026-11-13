
const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "Modo claro";
  } else {
    botaoTema.textContent = "Modo escuro";
  }
});


const botoesCurtir = document.querySelectorAll(".btn-curtir");

botoesCurtir.forEach(function (botao) {
  let curtidas = 0;
  const spanContador = botao.querySelector(".contador");

  botao.addEventListener("click", function () {
    curtidas++;
    spanContador.textContent = curtidas;
  });
});


const form = document.querySelector("#form-contato");
const feedback = document.querySelector("#feedback-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    feedback.style.color = "red";
    feedback.textContent = "Erro: Preencha todos os campos.";
    return;
  }

  if (!email.includes("@")) {
    feedback.style.color = "red";
    feedback.textContent = "Erro: Digite um e-mail válido com '@'.";
    return;
  }

  if (mensagem.length < 10) {
    feedback.style.color = "red";
    feedback.textContent = "Erro: A mensagem deve ter pelo menos 10 caracteres.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = `Obrigado, ${nome}! Mensagem enviada.`;
  form.reset();
});
