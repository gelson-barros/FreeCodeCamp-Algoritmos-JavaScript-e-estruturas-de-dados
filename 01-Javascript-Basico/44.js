/*
Manipular matrizes com shift ()

pop() sempre remove o último elemento de uma matriz. E se você quiser remover o primeiro?

É aí que .shift() entra. Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.

Exemplo:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArrayteria um valor da string Stimpsone ourArrayteria ["J", ["cat"]].

Use a .shift()função para remover o primeiro item de myArray, atribuindo o valor "deslocado" para removedFromMyArray.
*/

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

/*
myArray agora deve ser igual [["dog", 3]].

removedFromMyArray deve conter ["John", 23].
*/