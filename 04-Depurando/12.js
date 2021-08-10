/*
mpedir Loops Infinitos com uma Condição Terminal Válida
O tópico final é o temido loop infinito. Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de código um certo número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que encerre o loop. Os loops infinitos podem congelar ou travar o navegador e causar um caos geral na execução do programa, o que ninguém quer.

Houve um exemplo de loop infinito na introdução a esta seção - ele não tinha nenhuma condição terminal para sair do whileloop interno loopy(). NÃO chame esta função!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
É trabalho do programador garantir que a condição do terminal, que diz ao programa quando sair do código de loop, seja eventualmente alcançada. Um erro é aumentar ou diminuir uma variável do contador na direção errada da condição do terminal. Outro está redefinindo acidentalmente um contador ou variável de índice dentro do código de loop, em vez de incrementá-lo ou decrementá-lo.

A myFunc()função contém um loop infinito porque a condição terminal i != 4nunca será avaliada como false(e interromperá o loop) - iaumentará em 2 a cada passagem e saltará para a direita acima de 4, pois ié estranho para começar. Fixe o operador de comparação na condição do terminal para que o loop execute apenas para imenos ou igual a 4.
*/

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}

/*
Seu código deve mudar o operador de comparação na condição do terminal (a parte intermediária) do forloop.

Seu código deve fixar o operador de comparação na condição terminal do loop.
*/