/*
Iterar por meio de todos os itens de uma matriz usando loops for
Às vezes, ao trabalhar com matrizes, é muito útil poder iterar em cada item para encontrar um ou mais elementos de que possamos precisar, ou manipular uma matriz com base em quais itens de dados atendem a um determinado conjunto de critérios. Ofertas JavaScript vários métodos construídos em que cada iteração sobre matrizes de maneiras ligeiramente diferentes para conseguir resultados diferentes (tais como every(), forEach(), map(), etc.), no entanto, a técnica que é mais flexível e nos oferece a maior quantidade de controlo é um simples forcircuito.

Considere o seguinte:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
Usando um forloop, essa função itera e acessa cada elemento do array e o submete a um teste simples que criamos. Dessa forma, determinamos de maneira fácil e programática quais itens de dados são maiores que 10, e retornamos um novo array [12, 14, 80], contendo esses itens.

Definimos uma função filteredArray,, que recebe arr, uma matriz aninhada e elemcomo argumentos, e retorna uma nova matriz. elemrepresenta um elemento que pode ou não estar presente em uma ou mais das matrizes aninhadas dentro arr. Modifique a função, usando um forloop, para retornar uma versão filtrada da matriz passada, de forma que qualquer matriz aninhada em arrcontendo elemseja removida.
*/

//Logica que fiz no momento
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     let inteArr = [];
//     let a = true;
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(arr[i].length);
//         for (let x = 0; x < arr[i].length; x++) {
//             if (arr[i][x] === elem) {
//                 a = false;
//             }
//             inteArr.push(arr[i][x]);
//         }
//         if (a) {
//             newArr.push(inteArr);
//         }
//         a = true;
//         inteArr = [];
//     }
//     // Only change code above this line
//     return newArr;
// }

//logica que supostamente seria um uau
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length ;i++){
    if(arr[i].indexOf(elem) === -1){
        newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}


console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/*
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) deveria retornar [[10, 8, 3], [14, 6, 23]]

filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) deveria retornar [["flutes", 4]]

filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") deveria retornar [["amy", "beth", "sam"]]

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) deveria retornar []

A filteredArrayfunção deve utilizar um forloop
*/