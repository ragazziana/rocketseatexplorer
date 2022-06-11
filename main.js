const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Meow! Absolutely!",
    "I'm not so sure!",
    "Yes!",
    "Don't count with that!",
    "Of course!",
    "Ask me again later, I need i quick nap!",
    "Yes, definitely!",
    "My answer is no!",
  ]

function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Type your question")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity=1;

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}