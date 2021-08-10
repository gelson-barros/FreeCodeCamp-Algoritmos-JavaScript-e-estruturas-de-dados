/*
Compreender a expressão de função invocada imediatamente (IIFE)
Um padrão comum em JavaScript é executar uma função assim que ela for declarada:
*/

(function () {
    console.log("Chirp, chirp!");
})();

/*
Esta é uma expressão de função anônima que é executada imediatamente e tem saída Chirp, chirp!imediatamente.

Observe que a função não tem nome e não é armazenada em uma variável. Os dois parênteses () no final da expressão da função fazem com que ela seja executada ou chamada imediatamente. Esse padrão é conhecido como expressão de função imediatamente chamada ou IIFE .

Reescreva a função makeNeste remova sua chamada para que seja uma expressão de função anônima chamada imediatamente (IIFE).
*/

(function () {
    console.log("A cozy nest is ready");
})();



/*
A função deve ser anônima.

Sua função deve ter parênteses no final da expressão para chamá-la imediatamente.
*/