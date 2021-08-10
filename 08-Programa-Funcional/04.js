/*
Evite mutações e efeitos colaterais usando programação funcional

Se você ainda não descobriu, o problema no desafio anterior era com a splice chamada na tabClose()função. Infelizmente, splice muda o array original em que é chamado, então a segunda chamada para ele usou um array modificado e deu resultados inesperados.

Este é um pequeno exemplo de um padrão muito maior - você chama uma função em uma variável, array ou objeto, e a função altera a variável ou algo no objeto.

Um dos princípios básicos da programação funcional é não mudar as coisas. Mudanças levam a bugs. É mais fácil evitar bugs sabendo que suas funções não mudam nada, incluindo os argumentos da função ou qualquer variável global.

O exemplo anterior não teve nenhuma operação complicada, mas o splice método mudou o array original e resultou em um bug.

Lembre-se de que, na programação funcional, mudar ou alterar coisas é chamado de mutação e o resultado é chamado de efeito colateral . Uma função, idealmente, deve ser uma função pura , o que significa que ela não causa efeitos colaterais.

Vamos tentar dominar essa disciplina e não alterar nenhuma variável ou objeto em nosso código.

Preencha o código da função incrementer para que ela retorne o valor da variável global fixedValue acrescido de um.
*/

// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  return fixedValue + 1;
  // Only change code above this line
}

/*
Sua função incrementer não deve alterar o valor de fixedValue(que é 4).

Sua incrementer função deve retornar um valor maior que o fixedValue valor.

Sua incrementer função deve retornar um valor baseado no fixedValue valor da variável global .
*/