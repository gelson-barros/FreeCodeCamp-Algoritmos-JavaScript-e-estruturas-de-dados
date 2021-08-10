/*
Fatorializar um número
Retorna o fatorial do inteiro fornecido.

Se o inteiro for representado pela letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n.

Os fatoriais são frequentemente representados com a notação abreviada n!

Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Somente inteiros maiores ou iguais a zero serão fornecidos para a função.

*/

function factorialize(num) {
    let n = 1;
    for (let i = num; i > 0; i--) {
        n *= i;
    }
    return n;

    // for (var product = 1; num > 0; num--) {
    //     product *= num;
    // }
    // return product;


    //com recursão
    // if (num === 0) {
    //     return 1;
    // }
    // return num * factorialize(num - 1);
}

// function factorialize(num, factorial = 1) {
//     if (num == 0) {
//         return factorial;
//     } else {
//         return factorialize(num - 1, factorial * num);
//     }
// }

// function factorialize(num, factorial = 1) {
//     return num < 0
//         ? 1
//         : new Array(num)
//               .fill(undefined)
//               .reduce((product, val, index) => product * (index + 1), 1);
// }

console.log(factorialize(5));

/*
factorialize(5) deve retornar um número.

factorialize(5)deve retornar 120.

factorialize(10)deve retornar 3628800.

factorialize(20)deve retornar 2432902008176640000.

factorialize(0)deve retornar 1.
*/