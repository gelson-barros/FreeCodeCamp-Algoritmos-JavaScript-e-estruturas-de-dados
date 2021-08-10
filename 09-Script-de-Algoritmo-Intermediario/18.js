/*
Tudo seja verdade
Verifique se o predicado (segundo argumento) é verdadeiro em todos os elementos de uma coleção (primeiro argumento).

Em outras palavras, você recebe uma coleção de matriz de objetos. O predicado preserá uma propriedade do objeto e você precisa retornar true se seu valor for truthy. Caso contrário, volte false.

Em JavaScript, os truthy valores são valores que se traduzem em true quando avaliados em um contexto booleano.

Lembre-se de que você pode acessar as propriedades do objeto por meio de notação de ponto ou []notação.
*/
function truthCheck(collection, pre) {
  console.log(collection.every(obj => Boolean(obj[pre])));

}

// function truthCheck(collection, pre) {
//     // Is everyone being true?
//     return collection.every((obj) => obj[pre]);
// }

// function truthCheck(collection, pre) {
//     return collection.every(function (element) {
//         return element.hasOwnProperty(pre) && Boolean(element[pre]);
//     });
// }

// function truthCheck(collection, pre) {
//     // Create a counter to check how many are true.
//     var counter = 0;
//     // Check for each object
//     for (var c in collection) {
//         // If it is has property and value is truthy
//         if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//             counter++;
//         }
//     }
//     // Outside the loop, check to see if we got true for all of them and return true or false
//     return counter == collection.length;
// }

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // deve retornar true.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // deve retornar false.

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // deve retornar false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") // deve retornar false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") // deve retornar true.

truthCheck([{"single": "yes"}], "single") // deve retornar true.

truthCheck([{"single": ""}, {"single": "double"}], "single") // deve retornar false.

truthCheck([{"single": "double"}, {"single": undefined}], "single") // deve retornar false.

truthCheck([{"single": "double"}, {"single": NaN}], "single") // deve retornar false.
