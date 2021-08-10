/*
Menor Múltiplo Comum
Encontre o menor múltiplo comum dos parâmetros fornecidos que pode ser dividido igualmente por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.

O intervalo será uma matriz de dois números que não necessariamente estarão em ordem numérica.

Por exemplo, se for dado 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também seja igualmente divisível por todos os números entre 1 e 3. A resposta aqui seria 6.
*/
function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => (a * b) / gcd(a, b);
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    // console.log(range.reduce((multiple, curr) => lcm(multiple, curr)));
    console.log(min, max, range);
}

smallestCommons([1, 5]);

// smallestCommons([1, 5]) // deve retornar um número.

// smallestCommons([1, 5]) // deve retornar 60.

// smallestCommons([5, 1]) // deve retornar 60.

// smallestCommons([2, 10]) // deve retornar 2520.

// smallestCommons([1, 13]) // deve retornar 360360.

// smallestCommons([23, 18]) // deve retornar 6056820.
