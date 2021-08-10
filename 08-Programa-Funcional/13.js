/*
Combine Dois Arrays Usando o Método Concat
Concatenação significa juntar itens de ponta a ponta. JavaScript oferece o concatmétodo para strings e arrays que funcionam da mesma maneira. Para arrays, o método é chamado em um e, em seguida, outro array é fornecido como o argumento para concat, que é adicionado ao final do primeiro array. Ele retorna uma nova matriz e não altera nenhuma das matrizes originais. Aqui está um exemplo:
*/
[1, 2, 3].concat([4, 5, 6]);
/*
A matriz retornada seria [1, 2, 3, 4, 5, 6].

Use o concatmétodo na nonMutatingConcatfunção para concatenar attachaté o final de original. A função deve retornar a matriz concatenada.
*/
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
/*
Seu código deve usar o concatmétodo.

A firstmatriz não deve mudar.

A secondmatriz não deve mudar.

nonMutatingConcat([1, 2, 3], [4, 5])deve retornar [1, 2, 3, 4, 5].
*/