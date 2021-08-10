/*
Retorne os maiores números em matrizes
Retorne uma matriz que consiste no maior número de cada submatriz fornecida. Para simplificar, a matriz fornecida conterá exatamente 4 submatrizes.

Lembre-se de que você pode iterar por meio de uma matriz com um simples loop for e acessar cada membro com a sintaxe da matriz arr[i].
*/

// function largestOfFour(arr) {
//     return arr.map(Function.apply.bind(Math.max, null));
// }

// function largestOfFour(arr, finalArr = []) {
//     return !arr.length
//         ? finalArr
//         : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
// }

// function largestOfFour(arr) {
//     return arr.map(group => {
//         return group.reduce((acc, actual) => {
//             return acc > actual ? acc : actual;
//         })
//     });
// }

function largestOfFour(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push((arr[i].reduce((acc, actual) => (acc < actual ? actual : acc))));      
    }
    return newArray;
}


// function largestOfFour(arr) {
//     let results = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largestNumber = arr[i][0];
//         for (let j = 1; j < arr[i].length; j++) {
//             if (arr[i][j] > largestNumber) {
//                 largestNumber = arr[i][j];
//             }
//         }
//         results[i] = largestNumber;
//     }

//     return results;
// }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) deve retornar uma matriz.

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])deve retornar [27, 5, 39, 1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])deve retornar [9, 35, 97, 1000000].

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])deve retornar [25, 48, 21, -3].
*/