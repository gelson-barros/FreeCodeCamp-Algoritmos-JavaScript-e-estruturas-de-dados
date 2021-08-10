/*
Soma todos os primos
Um número primo é um número inteiro maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. Em contraste, 4 não é primo, pois é divisível por 1, 2 e 4.

Reescreva sumPrimes para que retorne a soma de todos os números primos menores ou iguais a num.
*/

function sumPrimes(num) {
    // function numeroPrimo(number) {
    //     for (let divisor = 2; divisor < number; divisor++) {
    //         if (number % divisor === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // let result = 0;
    // for (let number = 2; number <= num; number++) {
    //     if (numeroPrimo(number)) {
    //         result += number;
    //         // console.log(number);
    //     }
    // }
    // console.log(result);
    /*********************************************** */
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0)) {
            
            primes.push(i);
        }
    }
    console.log(primes.reduce((sum, prime) => sum + prime, 0))
}


// sumPrimes(10);
// sumPrimes(10) // deve retornar um número.

sumPrimes(10) // deve retornar 17.

// sumPrimes(977) // deve retornar 73156.