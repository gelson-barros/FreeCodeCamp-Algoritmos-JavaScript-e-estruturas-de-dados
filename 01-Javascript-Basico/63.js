/*
Comparação com o operador maior do quePassado
O operador maior que ( >) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, ele retorna true. Caso contrário, ele retorna false.

Como o operador de igualdade, o operador maior que converterá tipos de dados de valores durante a comparação.

Exemplos

5   >  3
7   > '3'
2   >  3
'1' >  9
No fim, essas expressões seria avaliada como true, true, false, e false.

Adicione o operador maior que às linhas indicadas para que as instruções de retorno façam sentido.
*/
function testGreaterThan(val) {
    if (val) {
        // Change this line
        return "Over 100";
    }

    if (val) {
        // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

/*
testGreaterThan(0) deve retornar a string 10 or Under

testGreaterThan(10) deve retornar a string 10 or Under

testGreaterThan(11) deve retornar a string Over 10

testGreaterThan(99) deve retornar a string Over 10

testGreaterThan(100) deve retornar a string Over 10

testGreaterThan(101) deve retornar a string Over 100

testGreaterThan(150) deve retornar a string Over 100

Você deve usar a >operadora pelo menos duas vezes
*/
