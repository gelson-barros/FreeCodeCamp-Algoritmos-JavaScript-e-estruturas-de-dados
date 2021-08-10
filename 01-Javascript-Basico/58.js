/*
Comparação com o operador de igualdadePassado
Existem muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor booleano trueou false.

O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna truese eles são equivalentes ou falsenão. Observe que a igualdade é diferente de assign ( =), que atribui o valor à direita do operador a uma variável à esquerda.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
Se myValfor igual a 10, o operador de igualdade retorna true, então o código entre chaves será executado e a função retornará Equal. Caso contrário, a função retornará Not Equal. Para que o JavaScript compare dois tipos de dados diferentes (por exemplo, numberse strings), ele deve converter um tipo em outro. Isso é conhecido como Coerção de Tipo. Depois de fazer isso, no entanto, ele pode comparar os termos da seguinte forma:

1   ==  1
1   ==  2
1   == '1'
"3" ==  3
No fim, essas expressões seria avaliada como true, false, true, e true.

Adicione o operador de igualdade à linha indicada para que a função retorne a string Equalquando valfor equivalente a 12.
*/

// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/*
testEqual(10) deve retornar a string Not Equal

testEqual(12) deve retornar a string Equal

testEqual("12") deve retornar a string Equal

Você deve usar o ==operador
*/