/*
Fatia e emenda
Você recebe duas matrizes e um índice.

Copie cada elemento da primeira matriz na segunda matriz, em ordem.

Comece inserindo elementos no índice n da segunda matriz.

Retorne a matriz resultante. As matrizes de entrada devem permanecer as mesmas após a execução da função.
*/

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    // let localArray = arr2.slice();
    // for (let i = 0; i < arr1.length; i++) {
    //     localArray.splice(n, 0, arr1[i]);
    //     n++;
    // }
    // return localArray;

    // It's alive. It's alive!
    // let localArr = arr2.slice();
    // localArr.splice(n, 0, ...arr1);
    // return localArr;

    let newArr = [...arr2];
    newArr.splice(n, 0, ...arr1);
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

frankenSplice([1, 2, 3], [4, 5], 1) // deve retornar [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) // deve retornar ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // deve retornar ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
/*
Todos os elementos da primeira matriz devem ser adicionados à segunda matriz em sua ordem original.

A primeira matriz deve permanecer a mesma após a execução da função.

A segunda matriz deve permanecer a mesma após a execução da função.
*/