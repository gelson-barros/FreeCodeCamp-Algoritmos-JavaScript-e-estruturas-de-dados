/*
Adicionar itens usando splice ()

Lembra que no último desafio que mencionamos splice()pode levar até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto de um ou mais elemento (s), para adicionar ao array. Isso pode ser extremamente útil para trocar rapidamente um elemento, ou um conjunto de elementos, por outro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
A segunda ocorrência de 12é removida e adicionamos 13e 14no mesmo índice. A numbersmatriz agora seria [ 10, 11, 12, 13, 14, 15 ].

Aqui, começamos com uma matriz de números. Em seguida, passamos o seguinte para splice(): O índice no qual começar a excluir os elementos (3), o número de elementos a serem excluídos (1) e os argumentos restantes (13, 14) serão inseridos a partir desse mesmo índice. Observe que pode haver qualquer número de elementos (separados por vírgulas) a seguir amountToDelete, cada um dos quais é inserido.

Definimos uma função htmlColorNames,, que recebe uma matriz de cores HTML como argumento. Modifique a função usando splice()para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon'e 'BlanchedAlmond'em seus respectivos lugares.
*/

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/*
htmlColorNames deveria retornar ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]

A htmlColorNamesfunção deve utilizar o splice()método

Você não deve usar shift()ou unshift().

Você não deve usar a notação de colchetes de matriz.
*/