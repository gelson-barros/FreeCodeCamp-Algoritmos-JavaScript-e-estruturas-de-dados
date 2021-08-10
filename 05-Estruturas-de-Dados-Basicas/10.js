/*
Verifique a presença de um elemento com indexOf ()
Uma vez que os arrays podem ser alterados ou transformados a qualquer momento, não há garantia sobre onde uma parte específica dos dados estará em um determinado array, ou se esse elemento ainda existe. Felizmente, o JavaScript nos fornece outro método embutido,, indexOf()que nos permite verificar de forma rápida e fácil a presença de um elemento em um array. indexOf()recebe um elemento como parâmetro e, quando chamado, retorna a posição, ou índice, desse elemento, ou -1se o elemento não existir na matriz.

Por exemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates')retorna -1, indexOf('oranges')retorna 2e indexOf('pears')retorna 1(o primeiro índice em que cada elemento existe).

indexOf()pode ser extremamente útil para verificar rapidamente a presença de um elemento em um array. Definimos uma função quickCheck,, que recebe um array e um elemento como argumentos. Modifique a função usando indexOf()para que ela retorne truese o elemento passado existir na matriz e falsese não existir.

*/
function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem) === -1 ? false : true;
    // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

/*
A quickCheckfunção deve retornar um booleano ( trueou false), não uma string ( "true"ou "false")

quickCheck(["squash", "onions", "shallots"], "mushrooms") deveria retornar false

quickCheck(["onions", "squash", "shallots"], "onions") deveria retornar true

quickCheck([3, 5, 9, 125, 45, 2], 125) deveria retornar true

quickCheck([true, false, false], undefined) deveria retornar false

A quickCheckfunção deve utilizar o indexOf()método
*/