/*
Compare escopos da var e deixe palavras-chave

Quando você declara uma variável com a varpalavra-chave, ela é declarada globalmente ou localmente se declarada dentro de uma função.

A letpalavra-chave se comporta de maneira semelhante, mas com alguns recursos extras. Quando você declara uma variável com a letpalavra - chave dentro de um bloco, instrução ou expressão, seu escopo é limitado a esse bloco, instrução ou expressão.

Por exemplo:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Aqui, o console exibirá os valores [0, 1, 2]e 3.

Com a varpalavra - chave, ié declarado globalmente. Portanto, quando i++é executado, ele atualiza a variável global. Este código é semelhante ao seguinte:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Aqui, o console exibirá os valores [0, 1, 2]e 3.

Esse comportamento causará problemas se você criar uma função e armazená-la para uso posterior dentro de um forloop que usa a ivariável. Isso ocorre porque a função armazenada sempre fará referência ao valor da ivariável global atualizada .

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
Aqui, o console exibirá o valor 3.

Como você pode ver, printNumTwo()imprime 3 e não 2. Isso ocorre porque o valor atribuído a ifoi atualizado e printNumTwo()retorna o global ie não o valor que itinha quando a função foi criada no loop for. A letpalavra-chave não segue este comportamento:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
Aqui, o console exibirá o valor 2e um erro que i is not defined.

inão está definido porque não foi declarado no escopo global. Ele só é declarado na forinstrução de loop. printNumTwo()retornou o valor correto porque três ivariáveis diferentes com valores exclusivos (0, 1 e 2) foram criadas pela letpalavra - chave dentro da instrução de loop.

Corrija o código para que ideclarado na ifinstrução seja uma variável separada daquela declarada na iprimeira linha da função. Certifique-se de não usar a varpalavra - chave em nenhum lugar do código.

Este exercício foi elaborado para ilustrar a diferença entre como vare as letpalavras - chave atribuem escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício, geralmente é melhor usar nomes de variáveis ​​diferentes para evitar confusão.
*/

function checkScope() {
    let i = "function scope";
    if (false) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

/*
var não deve existir no código.

Passed
A variável ideclarada na ifinstrução deve ser igual à string block scope.

Passed
checkScope() deve retornar a string function scope
*/