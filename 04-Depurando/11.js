/*
Tenha cuidado ao reinicializar variáveis ​​dentro de um loop
Às vezes, é necessário salvar informações, incrementar contadores ou reconfigurar variáveis ​​em um loop. Um problema potencial é quando as variáveis ​​devem ser reinicializadas e não são, ou vice-versa. Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.

Imprimir valores de variáveis ​​com cada ciclo de seu loop usando console.log()pode descobrir um comportamento problemático relacionado à redefinição ou falha ao redefinir uma variável.

A função a seguir deve criar uma matriz bidimensional com mlinhas e ncolunas de zeros. Infelizmente, ele não está produzindo a saída esperada porque a rowvariável não está sendo reinicializada (definida de volta para uma matriz vazia) no loop externo. Corrija o código para que ele retorne uma matriz correta de zeros 3x2, que se parece com [[0, 0], [0, 0], [0, 0]].
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
        row = [];
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/*
Seu código deve definir a matrixvariável para uma matriz contendo 3 linhas de 2 colunas de zeros cada.

A matrixvariável deve ter 3 linhas.

A matrixvariável deve ter 2 colunas em cada linha.
*/