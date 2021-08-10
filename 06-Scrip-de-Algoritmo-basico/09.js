/*
Achado não é roubado
Crie uma função que examina uma matriz arr e retorna o primeiro elemento nela que passa em um 'teste de verdade'. Isso significa que dado um elemento x, o 'teste de verdade' é passado se func(x)for true. Se nenhum elemento passar no teste, retorne undefined.
*/

// function findElement(arr, func) {
//     let num = 0;

//     for (let i = 0; i < arr.length; i++) {
//         num = arr[i];
//         if (func(num)) {
//             return num;
//         }
//     }

//     return undefined;
// }

//recursao
// function findElement(arr, func) {
//     return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
// }


// function findElement(arr, func) {
//     return arr[arr.map(func).indexOf(true)];
// }

function findElement(arr, func) {
    return arr.find(func); 
}

//findElement([1, 2, 3, 4], (num) => num % 2 === 0);

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))//deve retornar 8.

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))//deve retornar undefined.

// console.log([1, 3, 5, 9].find((item) => item % 2 === 0));