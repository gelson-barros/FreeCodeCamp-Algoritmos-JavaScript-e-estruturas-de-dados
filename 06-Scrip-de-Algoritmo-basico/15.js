/*
Mutações

Retorne truese a string no primeiro elemento da matriz contém todas as letras da string no segundo elemento da matriz.

Por exemplo ["hello", "Hello"],, deve retornar trueporque todas as letras na segunda string estão presentes na primeira, ignorando maiúsculas e minúsculas.

Os argumentos ["hello", "hey"]devem retornar falseporque a string hellonão contém um y.

Por último, ["Alien", "line"]deve retornar trueporque todas as letras em lineestão presentes em Alien.
*/

function mutation(arr) {
    // let test = arr[1].toLowerCase();
    // let target = arr[0].toLowerCase();
    // for (let i = 0; i < test.length; i++) {
    //     // console.log(target.indexOf(test[i]));
    //     if (target.indexOf(test[i]) < 0){
    //       return false;  
    //     } 
    // }
    // return true;

    return arr[1].toLowerCase().split('').every((letra) => arr[0].toLowerCase().indexOf(letra) != - 1);

    // return arr[1]
    //     .toLowerCase()
    //     .split("")
    //     .every(function (letter) {
    //         return arr[0].toLowerCase().indexOf(letter) != -1;
    //     });
}

// function mutation([target, test], i = 0) {
//     target = target.toLowerCase();
//     test = test.toLowerCase();
//     return i >= test.length
//         ? true
//         : !target.includes(test[i])
//         ? false
//         : mutation([target, test], i + 1);
// }

console.log(mutation(["hello", "hey"]));


console.log(mutation(["hello", "hey"])) // deve retornar false.

console.log(mutation(["hello", "Hello"])) // deve retornar true.

// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // deve retornar true.

// mutation(["Mary", "Army"]) // deve retornar true.

// mutation(["Mary", "Aarmy"]) // deve retornar true.

// mutation(["Alien", "line"]) // deve retornar true.

// mutation(["floor", "for"]) // deve retornar true.

// mutation(["hello", "neo"]) // deve retornar false.

// mutation(["voodoo", "no"]) // deve retornar false.

// mutation(["ate", "date"]) // deve retornar false.

// mutation(["Tiger", "Zebra"]) // deve retornar false.

// mutation(["Noel", "Ole"]) // deve retornar true.
