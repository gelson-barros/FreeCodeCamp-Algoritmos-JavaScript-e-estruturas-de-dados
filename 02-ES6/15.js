/*
Use a atribuição de desestruturação com o parâmetro Rest para reatribuir os elementos do array

Em algumas situações que envolvem a desestruturação do array, podemos querer coletar o resto dos elementos em um array separado.

O resultado é semelhante a Array.prototype.slice(), conforme mostrado abaixo:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
O console exibiria os valores 1, 2e [3, 4, 5, 7].

Variáveis ae bobtêm o primeiro e o segundo valores da matriz. Depois disso, devido à presença do parâmetro rest, arrobtém o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável da lista. Como em, você não pode usar o parâmetro rest para capturar um subarray que deixa de fora o último elemento do array original.

Use a atribuição de desestruturação com o parâmetro rest para realizar um efeito de Array.prototype.slice()modo que arrseja uma submatriz da matriz original sourcecom os primeiros dois elementos omitidos.
*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

/*
arr deveria estar [3,4,5,6,7,8,9,10]

source deveria estar [1,2,3,4,5,6,7,8,9,10]

Array.slice() não deve ser usado.

Desestruturação on listdeve ser usado.
*/