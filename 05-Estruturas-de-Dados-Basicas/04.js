/*
Remova itens de uma matriz com pop () e shift ()
Ambos push()e unshift()têm métodos correspondentes que são quase opostos funcionais: pop()e shift(). Como você já deve ter adivinhado, em vez de adicionar, pop() remove um elemento do final de uma matriz, enquanto shift()remove um elemento do início. A principal diferença entre pop()e shift()e seus primos push()e unshift(), é que nenhum dos métodos usa parâmetros, e cada um permite que um array seja modificado por um único elemento por vez.

Vamos dar uma olhada:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetingsteria o valor ['whats up?', 'hello'].

greetings.shift();
greetingsteria o valor ['hello'].

Também podemos retornar o valor do elemento removido com qualquer método como este:

let popped = greetings.pop();
greetingsteria o valor []e poppedteria o valor hello.

Definimos uma função popShift,, que recebe um array como argumento e retorna um novo array. Modifique a função, usando pop()e shift(), para remover o primeiro e o último elemento da matriz do argumento e atribua os elementos removidos às suas variáveis ​​correspondentes, de modo que a matriz retornada contenha seus valores.
*/

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

/*
popShift(["challenge", "is", "not", "complete"]) deveria retornar ["challenge", "complete"]

A popShiftfunção deve utilizar o pop()método

A popShiftfunção deve utilizar o shift()método
*/