/*
Dividir uma string em uma matriz usando o método de divisão
O splitmétodo divide uma string em uma matriz de strings. É necessário um argumento para o delimitador, que pode ser um caractere a ser usado para quebrar a string ou uma expressão regular. Por exemplo, se o delimitador for um espaço, você obtém uma matriz de palavras e, se o delimitador for uma string vazia, você obtém uma matriz de cada caractere da string.

Aqui estão dois exemplos que dividem uma string por espaços, depois outra por dígitos, usando uma expressão regular:
*/

var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
console.log(byDigits)
/*
bySpaceteria o valor ["Hello", "World"]e byDigitsteria o valor ["How", "are", "you", "today"].

Como as strings são imutáveis, o splitmétodo torna mais fácil trabalhar com elas.

Use o splitmétodo dentro da splitifyfunção para dividir strem um array de palavras. A função deve retornar a matriz. Observe que as palavras nem sempre são separadas por espaços e a matriz não deve conter pontuação.
*/
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/)

  // Only change code above this line
}
splitify("Hello World,I-am code");
/*
Seu código deve usar o splitmétodo.

splitify("Hello World,I-am code")deve retornar ["Hello", "World", "I", "am", "code"].

splitify("Earth-is-our home")deve retornar ["Earth", "is", "our", "home"].

splitify("This.is.a-sentence")deve retornar ["This", "is", "a", "sentence"].
*/