/*
Soma todos os números em um intervalo
Vamos passar a você uma matriz de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O número mais baixo nem sempre virá primeiro.

Por exemplo, sumAll([4,1])deve retornar 10 porque a soma de todos os números entre 1 e 4 (ambos inclusivos) é 10.
*/
// function sumAll(arr) {
//   let value = 0;
//   for (let i = arr[0]; arr[1] > arr[0] ? i <= arr[1]: i >= arr[1];arr[1] > arr[0]? i++: i--) {
//       value += i;
//   }
//   console.log(value);
// }

// const sumAll = arr => {
//   //Aperte tudo em um!
//   const startNum = arr[0];
//   const endNum = arr[1];
//   // Obtenha a contagem de números entre os dois números subtraindo-os e adicione 1 ao valor absoluto. 
//   // ex. Existem | 1-4 | + 1 = 4, (1, 2, 3, 4), 4 números entre 1 e 4.
//   const numCount = Math.abs(startNum - endNum) + 1;
//   console.log(numCount);
//   // Usando a fórmula de soma de progressão aritmética
//   const sum = ((startNum + endNum) * numCount) / 2;
//   console.log(sum)
// }


// function sumAll(arr){
//   let sumBetween = 0;
//   for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
//     sumBetween += i;
//   }
//   console.log(sumBetween);
// }


function sumAll(arr){
  const [first, last] = [...arr].sort((a,b) => a - b);
  console.log(first, last)
  return first !== last
                ? first + sumAll([first + 1, last]): first;
}

sumAll([1, 4]);


// sumAll([1, 4]) deve retornar um número.

// sumAll([1, 4]) deve retornar 10.

// sumAll([4, 1]) // deve retornar 10.

// sumAll([5, 10]) // deve retornar 45.

// sumAll([10, 5]) // deve retornar 45.
