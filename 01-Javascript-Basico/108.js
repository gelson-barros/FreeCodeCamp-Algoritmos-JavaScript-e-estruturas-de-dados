/*
Use o operador condicional (ternário)Passado
O operador condicional , também chamado de operador ternário , pode ser usado como uma expressão if-else de uma linha.

A sintaxe é a ? b : c, onde aestá a condição, bé o código a ser executado quando a condição retornar truee cé o código a ser executado quando a condição retornar false.

A função a seguir usa uma if/elseinstrução para verificar uma condição:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
Isso pode ser reescrito usando o operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
Use o operador condicional na checkEqualfunção para verificar se dois números são iguais ou não. A função deve retornar a string Equalou a string Not Equal.

*/

function checkEqual(a, b) {

}

checkEqual(1, 2);

/*
checkEqual deve usar o operador condicional

checkEqual(1, 2) deve retornar a string Not Equal

checkEqual(1, 1) deve retornar a string Equal

checkEqual(1, -1) deve retornar a string Not Equal
*/