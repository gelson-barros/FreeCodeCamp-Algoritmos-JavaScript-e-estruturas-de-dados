/*
Comparação com o operador de desigualdade estritaPassado
O operador de desigualdade estrita ( !==) é o oposto lógico do operador de igualdade estrita. Significa "Estritamente diferente" e retorna falseonde a igualdade estrita retornaria truee vice-versa . O operador de desigualdade estrita não converterá os tipos de dados.

Exemplos

3 !==  3
3 !== '3'
4 !==  3
No fim, essas expressões seria avaliada como false, true, e true.

Adicione o operador de desigualdade estrita à ifinstrução para que a função retorne a string Not Equalquando valnão for estritamente igual a17
*/

// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/*
testStrictNotEqual(17) deve retornar a string Equal

testStrictNotEqual("17") deve retornar a string Not Equal

testStrictNotEqual(12) deve retornar a string Not Equal

testStrictNotEqual("bob") deve retornar a string Not Equal

Você deve usar o !==operador
*/