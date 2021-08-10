/*
Cartas desaparecidas
Encontre a letra que falta no intervalo de letras passado e devolva-a.

Se todas as letras estiverem presentes no intervalo, retorne undefined.
*/
function fearNotLetter(str) {
    let alphStr = "abcdefghijklmnopqrstuvwxyz";
    let startStr = str.match(/^\w/)[0]
    let endStr = str.match(/\w$/)[0];
    let trecho = alphStr.substr(alphStr.indexOf(startStr), alphStr.indexOf(endStr))
    let strArr = trecho.split("").find((letter) => {
        return !str.includes(letter);
    });
    console.log(strArr);
    
}

// function fearNotLetter(str) {
//     for (let i = 1; i < str.length; ++i) {
//         if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//             console.log(String.fromCharCode(str.charCodeAt(i - 1) + 1));
//         }
//     }
// }

// function fearNotLetter(str) {
//     for (var i = 0; i < str.length; i++) {
//         /* code of current character */
//         var code = str.charCodeAt(i);

//         /* if code of current character is not equal to first character + no of iteration
//         hence character has been escaped */
//         if (code !== str.charCodeAt(0) + i) {
//             /* if current character has escaped one character find previous char and return */
//             return String.fromCharCode(code - 1);
//         }
//     }
//     return undefined;
// }

// function fearNotLetter(str) {
//     let currCharCode = str.charCodeAt(0);
//     let missing = undefined;

//     str.split("").forEach((letter) => {
//         if (letter.charCodeAt(0) === currCharCode) {
//             currCharCode++;
//         } else {
//             missing = String.fromCharCode(currCharCode);
//         }
//     });

//     return missing;
// }
fearNotLetter("abce");
fearNotLetter("abce") // deve retornar a string d.

fearNotLetter("abcdefghjklmno") // deve retornar a string i.

fearNotLetter("stvwx") // deve retornar a string u.

fearNotLetter("bcdf") // deve retornar a string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") // deve retornar undefined.