/*
Ficar na fila

Na Ciência da Computação, uma fila é uma Estrutura de Dados abstrata onde os itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens antigos podem ser retirados do início da fila.

Escreva uma função nextInLine que receba um array ( arr) e um número ( item) como argumentos.

Adicione o número ao final da matriz e, a seguir, remova o primeiro elemento da matriz.

A nextInLine função deve então retornar o elemento que foi removido.
*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();
    return item;
    // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
nextInLine([], 5) deve retornar um número.

nextInLine([], 1) deveria retornar 1

nextInLine([2], 1) deveria retornar 2

nextInLine([5,6,7,8,9], 1) deveria retornar 5

Depois nextInLine(testArr, 10), testArr[4]deveria ser 10
*/