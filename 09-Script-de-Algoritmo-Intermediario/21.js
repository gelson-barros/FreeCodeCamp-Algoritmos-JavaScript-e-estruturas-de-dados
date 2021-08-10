/*
Mapeie os destroços
Retorne uma nova matriz que transforma a altitude média dos elementos em seus períodos orbitais (em segundos).

A matriz conterá objetos no formato {name: 'name', avgAlt: avgAlt}.

Você pode ler sobre os períodos orbitais na Wikipedia .

Os valores devem ser arredondados para o número inteiro mais próximo. O corpo orbitado é a Terra.

O raio da terra é 6.367,4447 quilômetros, e o valor GM da terra é 398600,4418 km 3 s -2 .
*/
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   return arr;
// }


// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var a = 2 * Math.PI;
//   var newArr = [];

//   var getOrbPeriod = function(obj) {
//     var c = Math.pow(earthRadius + obj.avgAlt, 3);
//     var b = Math.sqrt(c / GM);
//     var orbPeriod = Math.round(a * b);
//     // create new object
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };

//   for (var elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }

//   return newArr;
// }

// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     var earthRadius = 6367.4447;
//     var newArr = [];

//     //Looping through each key in arr object
//     for (var elem in arr) {
//         //Rounding off the orbital period value
//         var orbitalPer = Math.round(
//             2 *
//                 Math.PI *
//                 Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
//         );
//         //Adding new object with orbitalPeriod property
//         newArr.push({ name: arr[elem].name, orbitalPeriod: orbitalPer });
//     }

//     return newArr;
// }

function orbitalPeriod(arr) {
  return arr.map(p => {
    return {
      name: p.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + 6367.4447), 3) / 398600.4418 ))
    }
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); // deve retornar [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])); // deve retornar [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
