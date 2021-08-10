/*
Diff Two Arrays
Compare duas matrizes e retorne uma nova matriz com quaisquer itens encontrados apenas em uma das duas matrizes fornecidas, mas não em ambas. Em outras palavras, retorne a diferença simétrica das duas matrizes.

Nota: Você pode retornar a matriz com seus elementos em qualquer ordem.
*/
// function diffArray(arr1, arr2) {
//     var newArr = [];

//     function onlyInFirst(first, second) {
//         // Looping through an array to find elements that don't exist in another array
//         for (var i = 0; i < first.length; i++) {
//             if (second.indexOf(first[i]) === -1) {
//                 // Pushing the elements unique to first to newArr
//                 newArr.push(first[i]);
//             }
//         }
//     }

//     onlyInFirst(arr1, arr2);
//     onlyInFirst(arr2, arr1);

//     return newArr;
// }

function diffArray(arr1, arr2) {
    var newArr = [
        ...arr2.filter((value) => !arr1.includes(value)),
        ...arr1.filter((value) => !arr2.includes(value)),
    ];
    
    console.log(newArr);
}

// function diffArray(arr1, arr2) {
//     return arr1
//         .concat(arr2)
//         .filter((item) => !arr1.includes(item) || !arr2.includes(item));
// }

// function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//     function diff(a, b) {
//         return a.filter((item) => b.indexOf(item) === -1);
//     }
// }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])  // deve retornar uma matriz.

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // deve retornar ["pink wool"].

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])  // deve retornar uma matriz com um item.

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) // deve retornar ["diorite", "pink wool"].

// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]  // deve retornar uma matriz com dois itens.

diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) // deve retornar [].

// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]  // deve retornar uma matriz vazia.

// [1, 2, 3, 5], [1, 2, 3, 4, 5] // deve retornar [4].

// [1, 2, 3, 5], [1, 2, 3, 4, 5]  // deve retornar uma matriz com um item.

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // deve retornar ["piglet", 4].

// [1, "calf", 3, "piglet"], [1, "calf", 3, 4]  // deve retornar uma matriz com dois itens.

diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) // deve retornar ["snuffleupagus", "cookie monster", "elmo"].

// [], ["snuffleupagus", "cookie monster", "elmo"]  // deve retornar uma matriz com três itens.

diffArray([1, "calf", 3, "piglet"], [7, "filly"]) // deve retornar [1, "calf", 3, "piglet", 7, "filly"].

// [1, "calf", 3, "piglet"], [7, "filly"]  // deve retornar uma matriz com seis itens.
