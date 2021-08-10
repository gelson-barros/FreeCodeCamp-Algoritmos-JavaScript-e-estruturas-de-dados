/*
Soma todos os números ímpares de Fibonacci

Dado um número inteiro positivo num, retorna a soma de todos os números ímpares de Fibonacci que são menores ou iguais a num.

Os primeiros dois números na sequência de Fibonacci são 1 e 1. Cada número adicional na sequência é a soma dos dois números anteriores. Os primeiros seis números da sequência de Fibonacci são 1, 1, 2, 3, 5 e 8.

Por exemplo, sumFibs(10)deve retornar 10 porque todos os números ímpares de Fibonacci menores ou iguais a 10 são 1, 1, 3 e 5.
*/
function sumFibs(num) {
    // let imparFib = 0
    // let fib = 0, anterior = 0, sucessor =0,i = 1;
    // while (fib <= num){
    //     // console.log(fib);
    //     if (fib <= 0) {
    //         sucessor = 1;
    //     }
    //     if(fib % 2 != 0){
    //         imparFib += fib;
    //     }
    //     anterior = sucessor;
    //     sucessor = fib;
    //     fib = anterior + sucessor;
    //     i++;
    // }
    // console.log(imparFib);
    /******************************* */
    // let prevNumber = 0;
    // let currNumber = 1;
    // let result = 0;
    // while (currNumber <= num) {
    //     if (currNumber % 2 !== 0) {
    //         result += currNumber;
    //     }
    //     console.log(currNumber);
    //     currNumber += prevNumber;
    //     prevNumber = currNumber - prevNumber;
    // }
    // console.log(result)
    /****************************** */

    // if(num <= 0){ return 0};
    // const arrFib = [1, 1];
    // let nextFib = 0;
    // while((nextFib = arrFib[0] + arrFib[1]) <= num){
    //     arrFib.unshift(nextFib);
    // }
    // console.log(arrFib.filter(x => x % 2 !== 0).reduce((a,b) => a + b))


}

sumFibs(10);

sumFibs(1); // deve retornar um número.

// sumFibs(1000); // deve retornar 1785.

// sumFibs(4000000); // deve retornar 4613732.

sumFibs(4); // deve retornar 5.

// sumFibs(75024); // deve retornar 60696.

// sumFibs(75025); // deve retornar 135721.
