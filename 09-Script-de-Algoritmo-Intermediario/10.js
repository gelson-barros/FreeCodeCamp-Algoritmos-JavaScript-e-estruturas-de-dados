/*
União Classificada
Escreva uma função que receba duas ou mais matrizes e retorne uma nova matriz de valores exclusivos na ordem das matrizes originais fornecidas.

Em outras palavras, todos os valores presentes de todas as matrizes devem ser incluídos em sua ordem original, mas sem duplicatas na matriz final.

Os números exclusivos devem ser classificados por sua ordem original, mas a matriz final não deve ser classificada em ordem numérica.

Verifique os testes de asserção para exemplos.
*/
function uniteUnique(arr) {
    let arrEnd = [];
    arr = Array.from(arguments)
    arr.forEach(numberArray => {
        numberArray.forEach(number=>{
            if (arrEnd.includes(number) === false){
                arrEnd.push(number);
            }
        })
    });
    console.log(arrEnd)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // deve retornar [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) // deve retornar [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // deve retornar [1, 2, 3, 5, 4, 6, 7, 8].