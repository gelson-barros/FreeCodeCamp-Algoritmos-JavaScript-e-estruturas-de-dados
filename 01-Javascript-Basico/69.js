/*
Apresentando outras declaraçõesPassado
Quando uma condição para uma ifdeclaração é verdadeira, o bloco de código seguinte é executado. E quando essa condição for falsa? Normalmente nada aconteceria. Com uma elseinstrução, um bloco alternativo de código pode ser executado.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine as ifinstruções em uma única if/elseinstrução.

*/

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }

    if (val <= 5) {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

/*
Você deve ter apenas uma ifdeclaração no editor

Você deve usar uma elsedeclaração

testElse(4) deve retornar a string 5 or Smaller

testElse(5) deve retornar a string 5 or Smaller

testElse(6) deve retornar a string Bigger than 5

testElse(10) deve retornar a string Bigger than 5

Você não deve alterar o código acima ou abaixo dos comentários especificados.
*/