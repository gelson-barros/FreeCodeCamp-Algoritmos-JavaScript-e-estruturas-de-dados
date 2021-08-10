/*
Agentes Binários
Retorne uma frase traduzida em inglês da string binária passada.

A string binária será separada por espaço.
*/
// function convertBinarioDecimal(binario) {
//     let numDecimal = 0,
//         arr = [];
//     binario = binario.toString();
//     arr = binario.split("");
//     if (!/[^01]/g.test(binario)) {
//         while (arr.length > 0) {
//             numDecimal += arr.shift() * Math.pow(2, arr.length);
//         }
//     } else {
//         numDecimal = NaN;
//     }
//     return numDecimal;
// }

// function binaryAgent(str) {
//     str = str
//         .split(" ")
//         .map((binario) => convertBinarioDecimal(binario))
//         .map((decimal) => String.fromCharCode(decimal))
//         .join("");
//     console.log(str);
// }

// function binaryAgent(str) {
//     var biString = str.split(" ");
//     var uniString = [];

//     /*using the radix (or base) parameter in parseInt, we can convert the binary
//       number to a decimal number while simultaneously converting to a char*/

//     for (var i = 0; i < biString.length; i++) {
//         uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//     }

//     // we then simply join the string
//     return uniString.join("");
// }

function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function (char) {
            return parseInt(char, 2);
        })
    );
    // console.log(String.fromCharCode(...str.split(" ").map(char => parseInt(char, 2))));
}



// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // deve retornar a string Aren't bonfires fun!?

// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // deve retornar a string I love FreeCodeCamp!


