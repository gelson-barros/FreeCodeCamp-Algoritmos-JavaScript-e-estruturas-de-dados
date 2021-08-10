/*
Use Atribuição de Destruição para Atribuir Variáveis ​​de Matrizes

ES6 torna a desestruturação de arrays tão fácil quanto a desestruturação de objetos.

Uma diferença chave entre o operador spread e a desestruturação do array é que o operador spread desempacota todo o conteúdo de um array em uma lista separada por vírgulas. Conseqüentemente, você não pode selecionar ou escolher quais elementos deseja atribuir às variáveis.

A destruição de uma matriz nos permite fazer exatamente isso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
O console exibirá os valores de ae bcomo 1, 2.

A variável aé atribuída ao primeiro valor da matriz e bao segundo valor da matriz. Também podemos acessar o valor em qualquer índice em uma matriz com desestruturação usando vírgulas para chegar ao índice desejado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
O console exibirá os valores de a, be ccomo 1, 2, 5.

Use a atribuição de desestruturação para trocar os valores de ae de bforma que areceba o valor armazenado em be breceba o valor armazenado em a.
*/

let a = 8, b = 6;
// Only change code below this line
[a,b] = [b, a];

/*
O valor de adeve ser 6, após a troca.

O valor de bdeve ser 8, após a troca.

Você deve usar a desestruturação de array para trocar ae b.
*/