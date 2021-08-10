/*
Use funções de ordem superior para mapear, filtrar ou reduzir para resolver um problema complexo
Agora que você tem trabalhado através de alguns desafios usando as funções de ordem superior como map(), filter()e reduce(), você agora começar a aplicá-los a resolver um desafio mais complexo.

Conclua o código para a squareListfunção usando qualquer combinação de map(), filter()e reduce(). A função deve retornar uma nova matriz contendo os quadrados apenas de inteiros positivos (números decimais não são inteiros) quando uma matriz de números reais é passada para ela. Um exemplo de uma matriz de números reais é [-3, 4.8, 5, 3, -3.2].

Nota: Sua função não deve usar nenhum tipo de forou whileloops ou a forEach()função.
*/

const squareList = (arr) => {
    // Only change code below this line
    return arr
        .filter((valor) => valor > 0 && Number.isInteger(valor))
        .map((valor) => valor ** 2);
    // Only change code above this line
};

// const squareList = (arr) => {
//     return arr.reduce((sqrIntegers, num) => {
//         return Number.isInteger(num) && num > 0
//             ? sqrIntegers.concat(num * num)
//             : sqrIntegers;
//     }, []);
// };

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
squareListdeve ser um function.

for,, whilee forEachnão deve ser usado.

map,, filterou reducedeve ser usado.

A função deve retornar um array.

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])deve retornar [16, 1764, 36].

squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])deve retornar [9, 100, 49].
*/