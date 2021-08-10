/*
Comparação com o maior ou igual ao operadorPassado
O maior ou igual a operator ( >=) compara os valores de dois números. Se o número à esquerda for maior ou igual ao número à direita, ele retorna true. Caso contrário, ele retorna false.

Como o operador de igualdade, o operador maior ou igual a converterá os tipos de dados durante a comparação.

Exemplos

6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
No fim, essas expressões seria avaliada como true, true, false, e false.

Adicione o operador maior ou igual a às linhas indicadas para que as instruções de retorno façam sentido.

*/

function testGreaterOrEqual(val) {
    if (val) {
        // Change this line
        return "20 or Over";
    }

    if (val) {
        // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

/*
testGreaterOrEqual(0) deve retornar a string Less than 10

testGreaterOrEqual(9) deve retornar a string Less than 10

testGreaterOrEqual(10) deve retornar a string 10 or Over

testGreaterOrEqual(11) deve retornar a string 10 or Over

testGreaterOrEqual(19) deve retornar a string 10 or Over

testGreaterOrEqual(100) deve retornar a string 20 or Over

testGreaterOrEqual(21) deve retornar a string 20 or Over

Você deve usar a >=operadora pelo menos duas vezes
*/