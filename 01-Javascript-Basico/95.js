/*
Iterar com JavaScript For LoopsPassado
Você pode executar o mesmo código várias vezes usando um loop.

O tipo mais comum de loop JavaScript é chamado de forloop porque é executado por um número específico de vezes.

Os loops For são declarados com três expressões opcionais separadas por ponto e vírgula:

for (a; b; c), onde aé a instrução de inicialização, bé a instrução da condição e cé a expressão final.

A instrução de inicialização é executada apenas uma vez antes do início do loop. Normalmente é usado para definir e configurar sua variável de loop.

A instrução de condição é avaliada no início de cada iteração do loop e continuará enquanto for avaliada como true. Quando a condição está falseno início da iteração, a execução do loop é interrompida. Isso significa que se a condição começar como falsa, seu loop nunca será executado.

A expressão final é executada no final de cada iteração de loop, antes da próxima verificação de condição e geralmente é usada para aumentar ou diminuir o contador de loop.

No exemplo a seguir, inicializamos com i = 0e iteramos enquanto nossa condição i < 5for verdadeira. Vamos incrementar ipor 1em cada iteração do loop com i++a nossa expressão final.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArrayagora terá o valor [0,1,2,3,4].

Use um forloop para enviar os valores de 1 a 5 myArray.
*/

// Setup
var myArray = [];

// Only change code below this line

/*
Você deve usar um forloop para isso.

myArraydeve ser igual [1,2,3,4,5].
*/