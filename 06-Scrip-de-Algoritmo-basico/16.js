/*
Macaco robusto
Escreva uma função que divide uma matriz (primeiro argumento) em grupos do comprimento de size(segundo argumento) e os retorna como uma matriz bidimensional.
*/

function chunkArrayInGroups(arr, size) {
   
    let newArr = [];
    for (let i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i + size)); 
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*
chunkArrayInGroups(["a", "b", "c", "d"], 2)deve retornar [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)deve retornar [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)deve retornar [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)deve retornar [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)deve retornar [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)deve retornar [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)deve retornar [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/