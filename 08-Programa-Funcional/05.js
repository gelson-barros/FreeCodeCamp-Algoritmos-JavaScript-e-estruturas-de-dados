/*
Passe argumentos para evitar dependência externa em uma função
O último desafio foi um passo mais perto dos princípios de programação funcional, mas ainda há algo faltando.

Não alteramos o valor da variável global, mas a função incrementernão funcionaria sem a variável global fixedValueestar lá.

Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que se uma função depende da presença de uma variável ou objeto, passe essa variável ou objeto diretamente para a função como um argumento.

Existem várias boas consequências desse princípio. A função é mais fácil de testar, você sabe exatamente qual entrada ela recebe e não vai depender de mais nada em seu programa.

Isso pode lhe dar mais confiança ao alterar, remover ou adicionar novo código. Você saberia o que pode ou não pode mudar e você pode ver onde estão as armadilhas potenciais.

Finalmente, a função sempre produziria a mesma saída para o mesmo conjunto de entradas, não importa que parte do código a execute.

Vamos atualizar a incrementerfunção para declarar claramente suas dependências.

Escreva a incrementerfunção de forma que receba um argumento e, em seguida, retorne um resultado após aumentar o valor em um.
*/

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fixedValue) {

  return fixedValue + 1;
  // Only change code above this line
}

/*
Sua função incrementer não deve alterar o valor de fixedValue(que é 4).

Sua incrementer função deve receber um argumento.

Sua incrementerfunção deve retornar um valor maior que o fixedValuevalor.
*/