let webhook = "YOUR WEBHOOK URL"; // URL do webhook onde será feita a requisição

async function clickBotao() {
  let textoInput = document.querySelector(".inputdescricao").value; // pega o valor digitado no input

  let button = document.querySelector(".botao"); // seleciona o botão (não está sendo usado, pode remover se quiser)

  let resposta = await fetch(webhook, {
    method: "POST", // metodo POST para envio de dados
    headers: {"Content-Type": "application/json"}, // indica que é do tipo JSON
    body: JSON.stringify({pergunta: textoInput}) // converte o texto do input para JSON e envia
  });

  let resultado = await resposta.json(); // converte a resposta do servidor para JS
  console.log(resultado); // mostra o resultado no console - debug

  let info = JSON.parse(resultado.resposta); // a resposta vem como string JSON, então é necessário fazer um parse para converter o JSON em objeto JS

  let codigo = document.querySelector(".areacod"); // seleciona o container de código
  codigo.innerHTML = info.code; // insere o código CSS gerado dentro da div

  let resultadocss = document.querySelector(".arearesult"); // seleciona o container do resultado
  resultadocss.innerHTML = info.preview; // insere o HTML da animação

  document.head.insertAdjacentHTML("beforeend", "<style>" + info.style + "</style>");
  // insere o CSS gerado dinamicamente na tag <head> da página
}
