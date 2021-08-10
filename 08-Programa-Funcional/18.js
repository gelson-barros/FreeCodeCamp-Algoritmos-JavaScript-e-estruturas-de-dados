/*
Retorne uma matriz classificada sem alterar a matriz original
Um efeito colateral do sortmétodo é que ele altera a ordem dos elementos na matriz original. Em outras palavras, ele transforma o array no local. Uma maneira de evitar isso é primeiro concatenar um array vazio ao que está sendo classificado (lembre-se disso slicee concatretorne um novo array) e, em seguida, execute o sortmétodo.

Use o sortmétodo na nonMutatingSortfunção para classificar os elementos de uma matriz em ordem crescente. A função deve retornar uma nova matriz e não alterar a globalArrayvariável.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    return arr.slice().sort((a, b) => a - b);

    // Only change code above this line
}

// function nonMutatingSort(arr) {
//     // Add your code below this line
//     return [].concat(arr).sort(function (a, b) {
//         return a - b;
//     });
//     // Add your code above this line
// }

nonMutatingSort(globalArray);


/*
Seu código deve usar o sort método.

A globalArray variável não deve mudar.

nonMutatingSort(globalArray)deve retornar [2, 3, 5, 6, 9].

nonMutatingSort(globalArray) não deve ser codificado.

A função deve retornar uma nova matriz, não a matriz passada a ela.

nonMutatingSort([1, 30, 4, 21, 100000])deve retornar [1, 4, 21, 30, 100000].

nonMutatingSort([140000, 104, 99])deve retornar [99, 104, 140000].
*/