/*
Adicionar itens a uma matriz com push () e unshift ()
O comprimento de um array, como os tipos de dados que ele pode conter, não é fixo. Os arrays podem ser definidos com um comprimento de qualquer número de elementos, e os elementos podem ser adicionados ou removidos ao longo do tempo; em outras palavras, os arrays são mutáveis . Neste desafio, veremos dois métodos com os quais podemos modificar programaticamente um array: Array.push()e Array.unshift().

Ambos os métodos pegam um ou mais elementos como parâmetros e os adicionam ao array em que o método está sendo chamado; o push()método adiciona elementos ao final de uma matriz e unshift()adiciona elementos ao início. Considere o seguinte:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumeralsteria o valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumeralsteria o valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Observe que também podemos passar variáveis, o que nos permite flexibilidade ainda maior na modificação dinâmica dos dados de nosso array.

Definimos uma função,, para a mixedNumbersqual estamos passando um array como argumento. Modifique a função usando push()e unshift()para adicionar 'I', 2, 'three'ao início da matriz e 7, 'VIII', 9ao final, de modo que a matriz retornada contenha representações dos números de 1 a 9 em ordem.
*/

function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, "VIII");
    arr.unshift("I", 2, "three",9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));