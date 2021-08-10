/*
Adicionar elementos ao final de uma matriz usando concat em vez de push
A programação funcional trata de criar e usar funções não mutantes.

O último desafio introduziu o concatmétodo como uma forma de combinar arrays em um novo sem alterar os arrays originais. Compare concatcom o pushmétodo. pushadiciona um item ao final do mesmo array em que é chamado, o que altera esse array. Aqui está um exemplo:
*/
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
/*
arrteria um valor modificado de [1, 2, 3, [4, 5, 6]], que não é a forma de programação funcional.

concat oferece uma maneira de adicionar novos itens ao final de uma matriz sem quaisquer efeitos colaterais mutantes.

Altere a nonMutatingPushfunção para que seja usada concatpara adicionar newItemao final de em originalvez de push. A função deve retornar uma matriz.
*/

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

/*
Seu código deve usar o concatmétodo.

Seu código não deve usar o pushmétodo.

A firstmatriz não deve mudar.

A secondmatriz não deve mudar.

nonMutatingPush([1, 2, 3], [4, 5])deve retornar [1, 2, 3, 4, 5].
*/