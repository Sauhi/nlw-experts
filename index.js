const perguntas = [
    {
      pergunta: "Qual método é usado para selecionar elementos pelo seu ID em JavaScript?",
      respostas: [
        "getElementByClassName()",
        "querySelector()",
        "getElementById()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de dado em JavaScript?",
      respostas: [
        "Boolean",
        "String",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
      respostas: [
        "//",
        "/*",
        "<!--",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destas é uma maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x = 10;",
        "x = 10;",
        "var x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em JavaScript?",
      respostas: [
        "Remove o último elemento de um array",
        "Adiciona um elemento ao final de um array",
        "Reverte a ordem dos elementos em um array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
      respostas: [
        "'53'",
        "8",
        "'8'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Modificar o estilo de um elemento",
        "Adicionar um ouvinte de evento a um elemento",
        "Selecionar um elemento pelo seu ID",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador ternário faz em JavaScript?",
      respostas: [
        "Permite a comparação de três valores",
        "Atribui um valor condicionalmente",
        "Inverte o valor de uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para converter uma string em um número em JavaScript?",
      respostas: [
        "convertToString()",
        "toInt()",
        "parseInt()",
      ],
      correta: 2
    }
  ];
  
  //puxar tamplate do quiz
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //puxar as perguntas
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('label').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
   const estaCorreta = event.target.value == item.correta //true
   if(estaCorreta) {
     corretas.add(item)
   }
  
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove resposta A
  quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }