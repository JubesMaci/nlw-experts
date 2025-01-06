// a const perguntas armazena a pergunta + respontas e o índice da resposta correta:
// A const perguntas armazena um array de objetos. 
// Cada objeto contém:
// - Uma pergunta (string)
// - Um array com respostas possíveis (strings)
// - O índice da resposta correta no array (número)

const perguntas = [
    {
      pergunta: "Qual tag é usada para criar um link em HTML?",
      respostas: [
        "<link>",
        "<a>",
        "<href>"
      ],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS é usada para alterar a cor do texto?",
      respostas: [
        "color",
        "text-color",
        "font-color"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para exibir um alerta na tela?",
      respostas: [
        "alert()",
        "prompt()",
        "confirm()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual elemento HTML é usado para inserir uma imagem?",
      respostas: [
        "<img>",
        "<image>",
        "<src>"
      ],
      correta: 0
    },
    {
      pergunta: "Qual seletor CSS seleciona todos os elementos com a classe 'botao'?",
      respostas: [
        "#botao",
        ".botao",
        "*botao"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para repetir uma ação em intervalos de tempo?",
      respostas: [
        "setInterval()",
        "setTimeout()",
        "repeatInterval()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir o tamanho da fonte?",
      respostas: [
        "text-size",
        "font-size",
        "size-font"
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador JavaScript é usado para comparar valor e tipo?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "let x;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual tag HTML é usada para criar uma lista ordenada?",
      respostas: [
        "<ul>",
        "<ol>",
        "<li>"
      ],
      correta: 1
    }
  ];
  // seleciona dentro do documento o id quiz no html
  const quiz = document.querySelector('#quiz')
  // seleciona o elemento template dentro do documento
  const template = document.querySelector('template')

  const corretas = new  Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

 // Loop para percorrer cada objeto (pergunta) no array 'perguntas'
for(const item of perguntas) { 
  // Clona todo o conteúdo do template, incluindo seus elementos filhos
  const quizItem = template.content.cloneNode(true) 
  //selecionando o h3 e inserindo na página os elementos armazenados em item.pergunta
  quizItem.querySelector('h3').textContent = item.pergunta


  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  // Remove o 'dt' original do 'dl', pois ele foi usado apenas como modelo para clonar
  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
