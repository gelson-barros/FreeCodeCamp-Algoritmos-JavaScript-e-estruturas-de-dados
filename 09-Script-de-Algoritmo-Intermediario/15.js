/*
Largue
Dado o array arr, itere e remova cada elemento começando pelo primeiro elemento (o índice 0) até que a função funcretorne truequando o elemento iterado passar por ele.

Em seguida, retorne o restante do array assim que a condição for satisfeita, caso contrário, arr deve ser retornado como um array vazio.
*/
function dropElements(arr, func) {
  // while(arr.length > 0 && !func(arr[0])){
  //   arr.shift();
  // }
  // console.log(arr);
  
 
  let index = arr.indexOf(arr.find(func));
  let arrEnd = index > 0 ? arr.splice(index, arr.length - 1): index === 0 ? arr : [] ;
  // console.log(arrEnd);
}

// dropElements([1, 2, 3], function(n) {return n < 3; });


// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // deve retornar [3, 4].

// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // deve retornar [1, 0, 1].

// dropElements([1, 2, 3], function(n) {return n > 0;}) // deve retornar [1, 2, 3].

// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // deve retornar [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // deve retornar [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // deve retornar [3, 9, 2].
