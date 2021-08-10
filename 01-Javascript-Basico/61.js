/*
Comparação com o operador de desigualdadePassado
O operador de desigualdade ( !=) é o oposto do operador de igualdade. Significa diferente e retorna falseonde a igualdade retornaria truee vice-versa . Como o operador de igualdade, o operador de desigualdade converterá tipos de dados de valores durante a comparação.

Exemplos

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
No fim, essas expressões seria avaliada como true, false, false, false, e false.

Adicione o operador de desigualdade !=na ifinstrução para que a função retorne a string Not Equalquando valnão for equivalente a99

*/

// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/*
testNotEqual(99) deve retornar a string Equal

testNotEqual("99") deve retornar a string Equal

testNotEqual(12) deve retornar a string Not Equal

testNotEqual("12") deve retornar a string Not Equal

testNotEqual("bob") deve retornar a string Not Equal

Você deve usar o !=operador
*/