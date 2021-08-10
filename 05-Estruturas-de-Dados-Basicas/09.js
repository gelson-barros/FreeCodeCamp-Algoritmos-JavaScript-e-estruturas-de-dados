/*
Combine Arrays com o Operador Spread

Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou inserir todos os elementos de um array em outro, em qualquer índice. Com sintaxes mais tradicionais, podemos concatenar matrizes, mas isso apenas nos permite combinar matrizes no final de uma e no início de outra. A sintaxe de propagação torna a seguinte operação extremamente simples:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
thatArrayteria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando a sintaxe de propagação, acabamos de alcançar uma operação que teria sido mais complexa e detalhada se tivéssemos usado métodos tradicionais.

Definimos uma função spreadOutque retorna a variável sentence. Modifique a função usando o operador spread para que ela retorne a matriz ['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

/*
spreadOut deveria retornar ["learning", "to", "code", "is", "fun"]

A spreadOutfunção deve utilizar sintaxe de propagação
*/
