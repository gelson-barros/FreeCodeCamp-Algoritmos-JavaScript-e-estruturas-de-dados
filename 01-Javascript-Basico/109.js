/*
Use vários operadores condicionais (ternários)Passado
No desafio anterior, você usou um único operador condicional. Você também pode encadea-los para verificar várias condições.

A função a seguir usos if, else ife elsedemonstrações para verificar várias condições:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
A função acima pode ser reescrita usando vários operadores condicionais:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
É considerada prática recomendada formatar vários operadores condicionais de forma que cada condição esteja em uma linha separada, conforme mostrado acima. Usar vários operadores condicionais sem indentação adequada pode tornar seu código difícil de ler. Por exemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
Na checkSignfunção, use vários operadores condicionais - seguindo o formato recomendado usado em findGreaterOrEqual- para verificar se um número é positivo, negativo ou zero. A função deve retornar positive, negativeou zero.
*/

function checkSign(num) {

}

checkSign(10);

/*
checkSign deve usar vários operadores condicionais

checkSign(10)deve retornar a string positive. Observe que a capitalização é importante

checkSign(-12)deve retornar a string negative. Observe que a capitalização é importante

checkSign(0)deve retornar a string zero. Observe que a capitalização é importante
*/