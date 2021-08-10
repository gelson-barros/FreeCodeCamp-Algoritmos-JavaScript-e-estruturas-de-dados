/*
Manipular matrizes com pop ()

Outra maneira de alterar os dados em um array é com a .pop() função.

.pop() é usado para retirar um valor do final de uma matriz. Podemos armazenar esse valor destacado atribuindo-o a uma variável. Em outras palavras, .pop() remove o último elemento de uma matriz e retorna esse elemento.

Qualquer tipo de entrada pode ser retirado de um array - números, strings e até mesmo arrays aninhados.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
O primeiro console.logexibirá o valor 6e o segundo exibirá o valor [1, 4].

Use a .pop()função para remover o último item de myArray, atribuindo o valor disparado a removedFromMyArray.
*/

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

/*
myArray deve conter apenas [["John", 23]].

Você deve usar pop() no myArray.

removedFromMyArray deve conter apenas ["cat", 2].
*/
