/*
Comparações com a operador lógica e (&)
Às vezes, você precisará testar mais de uma coisa por vez. O operador lógico e ( &&) retorna truese e somente se os operandos à esquerda e à direita dele forem verdadeiros.

O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outra if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
só retornará Yesse numfor maior que 5e menor que 10. A mesma lógica pode ser escrita como:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Substitua as duas instruções if por uma instrução, usando o &&operador, que retornará a string Yesse valfor menor ou igual a 50e maior ou igual a 25. Caso contrário, retornará a string No.


*/

function testLogicalAnd(val) {
    // Only change code below this line

    if (val) {
        if (val) {
            return "Yes";
        }
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

/*
Você deve usar o &&operador uma vez

Você só deve ter uma ifdeclaração

testLogicalAnd(0) deve retornar a string No

testLogicalAnd(24) deve retornar a string No

testLogicalAnd(25) deve retornar a string Yes

testLogicalAnd(30) deve retornar a string Yes

testLogicalAnd(50) deve retornar a string Yes

testLogicalAnd(51) deve retornar a string No

testLogicalAnd(75) deve retornar a string No

testLogicalAnd(80) deve retornar a string No
*/
