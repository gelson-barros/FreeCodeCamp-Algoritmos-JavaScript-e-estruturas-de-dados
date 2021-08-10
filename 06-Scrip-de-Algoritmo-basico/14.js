/*
Onde eu pertenço

Retorna o índice mais baixo no qual um valor (segundo argumento) deve ser inserido em uma matriz (primeiro argumento), uma vez que tenha sido classificado. O valor retornado deve ser um número.

Por exemplo, getIndexToIns([1,2,3,4], 1.5)deve retornar 1porque é maior que 1(índice 0), mas menor que 2(índice 1).

Da mesma forma, getIndexToIns([20,3,5], 19)deve retornar 2porque, uma vez que a matriz tenha sido classificada, terá a aparência [3,5,20]e 19será menor que 20(índice 2) e maior que 5(índice 1).
*/

function getIndexToIns(arr, num) {
    // return arr.filter(val => num > val)

    // arr.sort((a,b) => a - b);
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] >= num ) {
    //         return i;
    //     }
    // }
    // return arr.length;

    // // sort and find right index
    // let index = arr
    //     .sort((curr, next) => curr - next)
    //     .findIndex((currNum) => num <= currNum);
    // // Returns index or total length of arr
    // return index === -1 ? arr.length : index;


    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // deve retornar 3.

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));  // deve retornar um número.

// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // deve retornar 2.

// console.log(getIndexToIns([10, 20, 30, 40, 50], 30))  // deve retornar um número.

// console.log(getIndexToIns([40, 60], 50)) // deve retornar 1.

// console.log(getIndexToIns([40, 60], 50)) // deve retornar um número.

// console.log(getIndexToIns([3, 10, 5], 3)) // deve retornar 0.

// console.log(getIndexToIns([3, 10, 5], 3)) // deve retornar um número.

// console.log(getIndexToIns([5, 3, 20, 3], 5)) // deve retornar 2.

// console.log(getIndexToIns([5, 3, 20, 3], 5)) // deve retornar um número.

// console.log(getIndexToIns([2, 20, 10], 19)) // deve retornar 2.

// console.log(getIndexToIns([2, 20, 10], 19)) // deve retornar um número.

// console.log(getIndexToIns([2, 5, 10], 15)) // deve retornar 3.

// console.log(getIndexToIns([2, 5, 10], 15))  // deve retornar um número.

// console.log(getIndexToIns([], 1)) // deve retornar 0.

// console.log(getIndexToIns([], 1)) // deve retornar um número.
