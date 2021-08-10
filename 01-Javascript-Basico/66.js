/*
Comparação com o operador menor ou igual a
O menor ou igual a operator ( <=) compara os valores de dois números. Se o número à esquerda for menor ou igual ao número à direita, ele retorna true. Se o número à esquerda for maior que o número à direita, ele retornará false. Como o operador de igualdade, o operador menor ou igual a converte os tipos de dados.

Exemplos

4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
No fim, essas expressões seria avaliada como true, true, true, false, e false.

Adicione o operador menor ou igual a às linhas indicadas para que as instruções de retorno façam sentido.
*/

function testLessOrEqual(val) {
    if (val) {
        // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val) {
        // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

/*
testLessOrEqual(0) deve retornar a string Smaller Than or Equal to 12

testLessOrEqual(11) deve retornar a string Smaller Than or Equal to 12

testLessOrEqual(12) deve retornar a string Smaller Than or Equal to 12

testLessOrEqual(23) deve retornar a string Smaller Than or Equal to 24

testLessOrEqual(24) deve retornar a string Smaller Than or Equal to 24

testLessOrEqual(25) deve retornar a string More Than 24

testLessOrEqual(55) deve retornar a string More Than 24

Você deve usar a <=operadora pelo menos duas vezes
*/