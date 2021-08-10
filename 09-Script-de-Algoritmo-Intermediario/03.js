/*
Procurar e destruir
Você receberá uma matriz inicial (o primeiro argumento na destroyerfunção), seguida por um ou mais argumentos. Remova todos os elementos da matriz inicial que tenham o mesmo valor que esses argumentos.

Nota: Você tem que usar o arguments objeto.
*/

// function destroyer(arr, ...valsToRemove) {
//     return arr.filter((elem) => !valsToRemove.includes(elem));
// }

// function destroyer(arr) {
//     var valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(function (val) {
//         return !valsToRemove.includes(val);
//     });
// }

// function destroyer(arr) {
//     let newArr = []
//     for (let i = 1; i < arguments.length; i++) {
//         newArr.push(arguments[i])
//     }
//     console.log(arr.filter((value) => !newArr.includes(value)));
// }

// function destroyer(arr) {
//     let valsToRemove = Object.values(arguments).slice(1);

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < valsToRemove.length; j++) {
//             if (arr[i] === valsToRemove[j]) {
//                 delete arr[i];
//             }
//         }
//     }
//     return arr.filter((item) => item !== null);
// }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3)deve retornar [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)deve retornar [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5)deve retornar [1].

destroyer([2, 3, 2, 3], 2, 3)deve retornar [].

destroyer(["tree", "hamburger", 53], "tree", 53)deve retornar ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")deve retornar [12,92,65].
*/