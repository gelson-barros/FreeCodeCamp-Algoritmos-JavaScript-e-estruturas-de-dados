/*
Argumentos Opcionais
Crie uma função que some dois argumentos. Se apenas um argumento for fornecido, retorne uma função que espera um argumento e retorna a soma.

Por exemplo, addTogether(2, 3)deve retornar 5e addTogether(2)deve retornar uma função.

Chamar essa função retornada com um único argumento retornará a soma:
*/
// var sumTwoAnd = addTogether(2);
/*
sumTwoAnd(3) retorna 5.

Se algum dos argumentos não for um número válido, retorna indefinido.
*/

// function addTogether() {
//     var args = Array.from(arguments);
//     return args.some((n) => typeof n !== "number")
//         ? undefined
//         : args.length > 1
//         ? args.reduce((acc, n) => (acc += n), 0)
//         : (n) => (typeof n === "number" ? n + args[0] : undefined);
// }

function addTogether() {
    let args = Array.from(arguments);
    return args.some((n) => typeof n !== "number")
        ? undefined
        : args.length > 1
        ? args.reduce((acc, n) => acc + n, 0)
        : (n) => (typeof n === "number" ? n + args[0] : undefined);
}

// function addTogether() {
//     let arrStart = [...arguments],
//         test;
//     test = arrStart.every((value) => typeof value === "number");

//     if (test && arrStart.length > 1) {
//         return arrStart.reduce((acc, value) => {
//             return (acc += value);
//         }, 0);
//     } else if (test) {
//         return function () {
//             let arrEnd = [...arguments],
//                 test1;
//             test1 = arrEnd.every((value) => typeof value === "number");
//             if (test1) {
//                 return arrStart[0]+ arrEnd[0];
//             } else {
//                 return undefined;
//             }
//         };
//     } else {
//         return undefined;
//     }
// }

// function addTogether() {
//     const [first, second] = Object.values(arguments);
//     // Check first argument
//     if (typeof first !== "number") {
//         return undefined;
//     }

//     // Function to add second argument
//     const addSecond = (second) =>
//         typeof second === "number" ? first + second : undefined;

//     // Check second argument
//     if (second !== undefined) {
//         return addSecond(second);
//     } else {
//         return addSecond;
//     }
// }

// function addTogether() {
//     // Function to check if a number is actually a number
//     function checkNum(num) {
//         return typeof num === "number";
//     }

//     if (arguments.length === 2) {
//         // Check if we have two arguments and if they are numbers
//         // Return the sum if they are both numbers
//         let first = arguments[0];
//         let second = arguments[1];
//         if (checkNum(first) && checkNum(second)) {
//             return first + second;
//         } else {
//             return undefined;
//         }
//     } else if (arguments.length === 1) {
//         // If only one argument was found, return a new function
//         let first = arguments[0];
//         if (checkNum(first)) {
//             // Return function that expect a second argument.
//             function addSecond(second) {
//                 // Check if the new argument is a number
//                 if (checkNum(second)) {
//                     return first + second;
//                 } else {
//                     return undefined;
//                 }
//             }
//             return addSecond;
//         } else {
//             return undefined;
//         }
//     } else {
//         // Incorrect number of arguments found
//         return undefined;
//     }
// }

console.log(addTogether(2, 3));

console.log(addTogether(2, 3)); // deve retornar 5.

console.log(addTogether(23, 30)); // deve retornar 53.

// console.log(addTogether(5)(7)); // deve retornar 12.

console.log(addTogether("http://bit.ly/IqT6zt")); // deve retornar undefined.

console.log(addTogether(2, "3")); // deve retornar undefined.

// console.log(addTogether(2)([3])); // deve retornar undefined.
