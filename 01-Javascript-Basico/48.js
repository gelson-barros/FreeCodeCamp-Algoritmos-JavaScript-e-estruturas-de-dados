/*
Passando Valores para Funções com Argumentos

Parâmetros são variáveis ​​que agem como marcadores para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou "passados" ) em uma função quando ela é chamada são conhecidos como argumentos .

Aqui está uma função com dois parâmetros param1e param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Então, podemos chamar testFun assim: testFun("Hello", "World");. Passamos dois argumentos de string, Hello e World. Dentro da função, param1 será igual à string Hello e param2 será igual à string World. Observe que você pode chamar testFun novamente com argumentos diferentes e os parâmetros assumirão o valor dos novos argumentos.

Crie uma função chamada functionWithArgs que aceite dois argumentos e envie sua soma para o console dev.
Chame a função com dois números como argumentos.
*/

function functionWithArgs(a,b){
  return a + b;
}
functionWithArgs(1, 2);
/*
functionWithArgs deve ser uma função.

functionWithArgs(1,2) deve produzir 3.

functionWithArgs(7,9) deve produzir 16.

Você deve ligar functionWithArgs para dois números depois de defini-lo.
*/