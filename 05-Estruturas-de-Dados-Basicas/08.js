/*
Copie um Array com o Spread Operator

Enquanto slice()nos permite ser seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo operador de propagação do ES6 nos permite copiar facilmente todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de propagação simplesmente se parece com isto:...

Na prática, podemos usar o operador spread para copiar uma matriz assim:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArrayé igual [true, true, undefined, false, null]. thisArraypermanece inalterado e thatArraycontém os mesmos elementos que thisArray.

Definimos uma função, copyMachineque leva arr(uma matriz) e num(um número) como argumentos. A função deve retornar uma nova matriz composta de numcópias de arr. Fizemos a maior parte do trabalho para você, mas ainda não funciona bem. Modifique a função usando a sintaxe de propagação para que funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!).
*/

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

/*
copyMachine([true, false, true], 2) deveria retornar [[true, false, true], [true, false, true]]

copyMachine([1, 2, 3], 5) deveria retornar [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]

copyMachine([true, true, null], 1) deveria retornar [[true, true, null]]

copyMachine(["it works"], 3) deveria retornar [["it works"], ["it works"], ["it works"]]

A copyMachinefunção deve utilizar o spread operatorarray witharr

*/