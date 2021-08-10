/*
Extrair correspondências

Até agora, você só verificou se um padrão existe ou não dentro de uma string. Você também pode extrair as correspondências reais encontradas com o .match()método.

Para usar o .match()método, aplique o método em uma string e passe a regex entre parênteses.

Aqui está um exemplo:
*/
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
// Aqui o primeiro match voltaria ["Hello"]e o segundo voltaria ["expressions"].

/*
Observe que a .match sintaxe é o "oposto" do .test~método que você está usando até agora:
*/
'string'.match(/regex/);
/regex/.test('string');
/*
Aplique o .match()método para extrair a string coding.
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);
/*
A resultdeve ter a stringcoding

Seu regex codingRegex deve procurar a string coding

Você deve usar o .match()método.
*/