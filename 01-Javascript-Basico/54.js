/*
Atribuição com valor devolvido

Se você se lembra de nossa discussão sobre Armazenamento de valores com o operador de atribuição , tudo à direita do sinal de igual é resolvido antes que o valor seja atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

Suponha que temos uma função predefinida sum que adiciona dois números, então:

ourSum = sum(5, 12);
irá chamar a sum função, que retorna um valor de 17 e o atribui à ourSum variável.

Chame a processArg função com um argumento de 7 e atribua seu valor de retorno à variável processed.
*/

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

/*
processed deve ter um valor de 2

Você deve atribuir processArg a processed
*/