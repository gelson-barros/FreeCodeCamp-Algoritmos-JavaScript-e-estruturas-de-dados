/*
Refatorar Variáveis ​​Globais Fora de Funções
Até agora, vimos dois princípios distintos para a programação funcional:

    1.Não altere uma variável ou objeto - crie novas variáveis ​​e objetos e retorne-os se necessário de uma função. Dica: usar algo como var newArr = arrVar, onde arrVar é um array simplesmente criará uma referência à variável existente e não uma cópia. Portanto, alterar um valor em newArr alteraria o valor em arrVar.

    2.Declare os parâmetros da função - qualquer cálculo dentro de uma função depende apenas dos argumentos passados ​​para a função, e não de qualquer objeto ou variável global.

Adicionar um a um número não é muito empolgante, mas podemos aplicar esses princípios ao trabalhar com matrizes ou objetos mais complexos.

Reescreva o código para que a matriz global bookList não seja alterada em nenhuma das funções. A função add deve adicionar o dado bookName ao final do array passado a ela e retornar um novo array (lista). A removefunção deve remover o dado bookNamedo array passado para ela.

Nota: Ambas as funções devem retornar uma matriz e quaisquer novos parâmetros devem ser adicionados antes do bookNameparâmetro.
*/

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newArr = [];
    newArr.push(...arr, bookName);
    return newArr;

    // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let newArr = arr.slice();
    var book_index = newArr.indexOf(bookName);
    if (book_index >= 0) {
        newArr.splice(book_index, 1);
        return newArr;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/*
bookList não deve mudar e ainda igual ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

newBookListdeve ser igual ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

newerBookListdeve ser igual ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

newestBookListdeve ser igual ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
*/