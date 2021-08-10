/*
Compreendendo as diferenças entre o freeCodeCamp e o console do navegador

Você deve ter notado que alguns desafios de JavaScript do freeCodeCamp incluem seu próprio console. Este console se comporta de maneira um pouco diferente do console do navegador que você usou no último desafio.

O desafio a seguir tem como objetivo destacar a principal diferença entre o console do freeCodeCamp e o console do seu navegador.

Quando você executa o JavaScript comum, o console do navegador exibe suas console.log()instruções o número exato de vezes que é chamado.

O console freeCodeCamp imprimirá suas console.log()instruções logo após o editor detectar uma mudança no script, bem como durante o teste.

O console freeCodeCamp é limpo antes de os testes serem executados e, para evitar spam, apenas imprime os logs durante o primeiro teste (veja a nota abaixo para exceções).

Se quiser ver todos os registros de todos os testes, execute os testes e abra o console do navegador. Se você preferir usar o console do navegador e quiser que ele imite o console do freeCodeCamp, faça-o console.clear()antes de qualquer outra consolechamada para limpar o console do navegador.

Nota: console.log s funções internas são impressas no console freeCodeCamp sempre que essas funções são chamadas. Isso pode ajudar a depurar funções que são chamadas durante o teste.

Primeiro, use console.logpara registrar a outputvariável. Em seguida, use console.clearpara limpar o console do navegador.
*/

// Abra o console do seu navegador.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log () para imprimir a variável output.

// Execute os testes para ver a diferença entre os dois consoles.

// Agora, adicione console.clear () antes de seu console.log () para limpar o console do navegador e passar nos testes.
console.clear();
console.log(output);

/*
Você deve usar console.clear()para limpar o console do navegador.

Passed
Você deve usar console.log()para imprimir a outputvariável.
*/