/*
Escopo Global vs. Local em Funções

É possível ter variáveis locais e globais com o mesmo nome. Ao fazer isso, a variável local tem precedência sobre a variável global.

Neste exemplo:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
A função myFun retornará a string Head porque a versão local da variável está presente.

Adicione uma variável local à myOutfitfunção para substituir o valor de outerWearcom a string sweater.
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var oouterWear = "Saia";


  // Only change code above this line
  return outerWear;
}

myOutfit();

/*
Você não deve alterar o valor do global outerWear.

myOutfit deve retornar a string sweater.

Você não deve alterar a instrução de retorno.
*/
