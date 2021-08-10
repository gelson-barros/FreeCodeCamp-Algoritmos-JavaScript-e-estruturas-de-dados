/*
Comparação com o operador menor que 
O operador menor que ( <) compara os valores de dois números. Se o número à esquerda for menor que o número à direita, ele retorna true. Caso contrário, ele retorna false. Como o operador de igualdade, o operador menor que converte os tipos de dados durante a comparação.

Exemplos

2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
No fim, essas expressões seria avaliada como true, true, false, false, e false.

Adicione o operador menor que às linhas indicadas para que as instruções de retorno façam sentido.
*/

function testLessThan(val) {
    if (val) {
        // Change this line
        return "Under 25";
    }

    if (val) {
        // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

/*
testLessThan(0) deve retornar a string Under 25

testLessThan(24) deve retornar a string Under 25

testLessThan(25) deve retornar a string Under 55

testLessThan(54) deve retornar a string Under 55

testLessThan(55) deve retornar a string 55 or Over

testLessThan(99) deve retornar a string 55 or Over

Você deve usar a <operadora pelo menos duas vezes
*/