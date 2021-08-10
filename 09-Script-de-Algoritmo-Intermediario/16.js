/*
Rolo compressor
Acha te uma matriz aninhada. Você deve levar em consideração os vários níveis de aninhamento.
*/
// function steamrollArray(arr) {
//     const array = [];
//     for(let i = 0; i < arr.length; i++){
//        if (Array.isArray(arr[i])) {
//            array.push(...steamrollArray(arr[i]));
//        } else {
//            array.push(arr[i]);
//        }
//     };
//     console.log(array);
// }

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   // Loop over array contents
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// };
// function steamrollArray(arr) {
//     return arr
//         .toString()
//         .replace(",,", ",") // "1,2,,3" => "1,2,3"
//         .split(",") // ['1','2','3']
//         .map(function (v) {
//             if (v == "[object Object]") {
//                 // bring back empty objects
//                 return {};
//             } else if (isNaN(v)) {
//                 // if not a number (string)
//                 return v;
//             } else {
//                 return parseInt(v); // if a number in a string, convert it
//             }
//         });
// }

// function steamrollArray(val, flatArr = []) {
//     val.forEach((item) => {
//         if (Array.isArray(item)) steamrollArray(item, flatArr);
//         else flatArr.push(item);
//     });
//     return flatArr;
// }

steamrollArray([1, [2], [3, [[4]]]]);

steamrollArray([1, [2], [ 3, [[4]] ] ]);
/*
steamrollArray([[["a"]], [["b"]]])deve retornar ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]])deve retornar [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]])deve retornar [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]])deve retornar [1, {}, 3, 4].

Sua solução não deve usar os métodos Array.prototype.flat() ou Array.prototype.flatMap().
*/