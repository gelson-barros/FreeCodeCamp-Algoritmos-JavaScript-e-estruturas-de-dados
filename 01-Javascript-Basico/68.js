/*
Comparações com o operador lógico ouPassado
O operador lógico ou ( ||) retorna truese algum dos operandos for true. Caso contrário, ele retorna false.

O operador lógico ou é composto por dois símbolos de barra vertical: ( ||). Normalmente, isso pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar de pontos de referência anteriores:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
retornará Yessomente se numestiver entre 5e 10(5 e 10 incluídos). A mesma lógica pode ser escrita como:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine as duas ifinstruções em uma instrução que retorna a string Outsidese valnão estiver entre 10e 20, inclusive. Caso contrário, retorne a string Inside.


*/

function testLogicalOr(val) {
    // Only change code below this line

    if (val) {
        return "Outside";
    }

    if (val) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

/*
Você deve usar o ||operador uma vez

Você só deve ter uma ifdeclaração

testLogicalOr(0) deve retornar a string Outside

testLogicalOr(9) deve retornar a string Outside

testLogicalOr(10) deve retornar a string Inside

testLogicalOr(15) deve retornar a string Inside

testLogicalOr(19) deve retornar a string Inside

testLogicalOr(20) deve retornar a string Inside

testLogicalOr(21) deve retornar a string Outside

testLogicalOr(25) deve retornar a string Outside
*/