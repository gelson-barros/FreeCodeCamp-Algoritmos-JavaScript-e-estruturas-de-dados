/*
Encontre a palavra mais longa em uma string

Retorne o comprimento da palavra mais longa na frase fornecida.

Sua resposta deve ser um número.
*/

function findLongestWordLength(str) {
    return str.split(" ").reduce((acc, actual) => {
        return acc.length < actual.length ? actual : acc ;
    }).length;
}

// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map((word) => word.length));
// }

// function findLongestWordLength(str) {
//     // split the string into individual words
//     const words = str.split(" ");

//     // words only has 1 element left that is the longest element
//     if (words.length == 1) {
//         return words[0].length;
//     }

//     // if words has multiple elements, remove the first element
//     // and recursively call the function
//     return Math.max(
//         words[0].length,
//         findLongestWordLength(words.slice(1).join(" "))
//     );
// }

// function findLongestWordLength(str) {
//     let words = str.split(" ");
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//         }
//     }

//     return maxLength;
// }

// function findLongestWordLength(s) {
//     return s.split(" ").reduce(function (longest, word) {
//         return Math.max(longest, word.length);
//     }, 0);
// }

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*
findLongestWordLength("The quick brown fox jumped over the lazy dog") deve retornar um número.

findLongestWordLength("The quick brown fox jumped over the lazy dog")deve retornar 6.

findLongestWordLength("May the force be with you")deve retornar 5.

findLongestWordLength("Google do a barrel roll")deve retornar 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow")deve retornar 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")deve retornar 19.
*/