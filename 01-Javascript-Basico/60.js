/*
Pratique comparar valores diferentesPassado
Nos últimos dois desafios, aprendemos sobre o operador de igualdade ( ==) e o operador de igualdade estrita ( ===). Vamos fazer uma revisão rápida e praticar o uso desses operadores um pouco mais.

Se os valores que estão sendo comparados não forem do mesmo tipo, o operador de igualdade executará uma conversão de tipo e, em seguida, avaliará os valores. No entanto, o operador de igualdade estrita comparará o tipo de dados e o valor no estado em que se encontram, sem converter um tipo em outro.

Exemplos

3 == '3'retorna trueporque o JavaScript realiza a conversão de tipo de string em número. 3 === '3'retorna false porque os tipos são diferentes e a conversão de tipo não é executada.

Nota: Em JavaScript, você pode determinar o tipo de uma variável ou um valor com o typeofoperador, da seguinte maneira:

typeof 3
typeof '3'
typeof 3retorna a string numbere typeof '3'retorna a string string.

A compareEqualityfunção no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string Equalapenas quando os valores forem estritamente iguais.
*/

// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/*
compareEquality(10, "10") deve retornar a string Not Equal

compareEquality("20", 20) deve retornar a string Not Equal

Você deve usar o ===operador
*/