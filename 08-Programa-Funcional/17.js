/*
Classifique uma matriz em ordem alfabética usando o método de classificação
O sortmétodo classifica os elementos de uma matriz de acordo com a função de retorno de chamada.

Por exemplo:
*/
function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
//Isso retornaria o valor [1, 2, 3, 4, 5].
function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(["l", "h", "z", "b", "s"]);

/*
Isso retornaria o valor ['z', 's', 'l', 'h', 'b'].

O método de classificação padrão do JavaScript é pelo valor do ponto Unicode da string, que pode retornar resultados inesperados. Portanto, é recomendável fornecer uma função de retorno de chamada para especificar como classificar os itens da matriz. Quando essa função de retorno de chamada, normalmente chamada compareFunction, é fornecida, os elementos do array são classificados de acordo com o valor de retorno de compareFunction: If compareFunction(a,b)retorna um valor menor que 0 para dois elementos ae b, então avirá antes b. Se compareFunction(a,b)retorna um valor maior que 0 para dois elementos ae b, então bvirá antes a. Se compareFunction(a,b)retorna um valor igual a 0 para dois elementos ae b, então ae bpermanecerá inalterado.

Use o sor tmétodo na alphabetical Order função para classificar os elementos arrem ordem alfabética.
*/

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

    // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


/*
Seu código deve usar o sortmétodo.

alphabeticalOrder(["a", "d", "c", "a", "z", "g"])deve retornar ["a", "a", "c", "d", "g", "z"].

alphabeticalOrder(["x", "h", "a", "m", "n", "m"])deve retornar ["a", "h", "m", "m", "n", "x"].

alphabeticalOrder(["a", "a", "a", "a", "x", "t"])deve retornar ["a", "a", "a", "a", "t", "x"].
*/