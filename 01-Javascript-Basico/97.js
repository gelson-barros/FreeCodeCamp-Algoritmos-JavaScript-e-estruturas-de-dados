/*
Conte para trás com um For LoopPassado
Um loop for também pode contar para trás, desde que possamos definir as condições corretas.

Para diminuir em dois a cada iteração, precisaremos alterar nossa inicialização, condição e expressão final.

Vamos começar em i = 10e fazer um loop while i > 0. Vamos diminuir iem 2 cada loop com i -= 2.

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArrayagora conterá [10,8,6,4,2]. Vamos mudar nossa inicialização e expressão final para que possamos contar regressivamente em dois para criar uma matriz de números ímpares descendentes.

Empurre os números ímpares de 9 a 1 para myArrayusar um forloop.
*/

// Setup
var myArray = [];

// Only change code below this line

/*
Você deve usar um forloop para isso.

Você deve usar o método array push.

myArraydeve ser igual [9,7,5,3,1].
*/