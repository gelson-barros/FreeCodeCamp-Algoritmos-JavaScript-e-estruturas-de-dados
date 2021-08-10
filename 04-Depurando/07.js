/*
Capture o uso do operador de atribuição em vez do operador de igualdade
Programas de ramificação, isto é, os que fazem coisas diferentes se forem respeitadas determinadas condições, dependem if, else ife elsedemonstrações em JavaScript. A condição às vezes assume a forma de testar se um resultado é igual a um valor.

Essa lógica é falada (pelo menos em inglês) como "se x for igual a y, então ...", que pode ser traduzido literalmente em código usando o =operador de atribuição ou. Isso leva a um fluxo de controle inesperado em seu programa.

Conforme abordado nos desafios anteriores, o operador de atribuição ( =) em JavaScript atribui um valor a um nome de variável. E os operadores ==e ===verificam a igualdade (os ===testes triplos para igualdade estrita, o que significa que o valor e o tipo são iguais).

O código abaixo é atribuído xa 2, que é avaliado como true. Quase todos os valores por si próprio em JavaScript avaliada como true, exceto que são conhecidos como os valores "Falsas": false, 0, ""(uma string vazia), NaN, undefined, e null.

let x = 1;
let y = 2;
if (x = y) {

} else {

}
Neste exemplo, o bloco de código dentro da ifinstrução será executado para qualquer valor de y, a menos que yseja falso. O elsebloco, que esperamos executar aqui, não será executado de fato.

Corrija a condição para que o programa execute o branch correto e o valor apropriado seja atribuído result.
*/

let x = 7;
let y = 9;
let result = "to come";

if ((x == y)) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);

/*
Seu código deve corrigir a condição para que verifique a igualdade, em vez de usar atribuição.

A condição deve usar ==ou ===para testar a igualdade.
*/