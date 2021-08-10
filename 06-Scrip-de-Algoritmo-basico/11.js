/*
Caixa do título uma frase
Retorne a string fornecida com a primeira letra de cada palavra maiúscula. Certifique-se de que o resto da palavra esteja em minúsculas.

Para o propósito deste exercício, você também deve colocar em maiúscula as palavras de ligação como thee of.
*/

// String.prototype.replaceAt = function (index, character) {
//     return (
//         this.substr(0, index) +
//         character +
//         this.substr(index + character.length)
//     );
// };

// function titleCase(str) {
//     var newTitle = str.split(" ");
//     var updatedTitle = [];
//     for (var st in newTitle) {
//         updatedTitle[st] = newTitle[st]
//             .toLowerCase()
//             .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//     }
//     return updatedTitle.join(" ");
// }


// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     var result = convertToArray.map(function (val) {
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
// }

// function titleCase(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

function titleCase(str) {
    let newArr = str.toLowerCase().split(" ");    
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].replace(newArr[i][0], newArr[i][0].toUpperCase());
    }
    return newArr.join(' ');  
}


console.log(titleCase("I'm a little tea pot"));

//titleCase("I'm a little tea pot")  //deve retornar uma string.
//
//titleCase("I'm a little tea pot") //deve retornar a string I'm A Little Tea Pot.
//
//titleCase("sHoRt AnD sToUt") //deve retornar a string Short And Stout.
//
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //deve retornar a string Here Is My Handle Here Is My Spout.