/*
Usando o método de teste

Expressões regulares são usadas em linguagens de programação para combinar partes de strings. Você cria padrões para ajudá-lo a fazer essa correspondência.

Se você quiser encontrar a palavra the na string The dog chased the cat, você poderia usar a seguinte expressão regular: /the/. Observe que as aspas não são necessárias na expressão regular.

JavaScript possui várias maneiras de usar regexes. Uma maneira de testar uma regex é usar o método .test(). O método .test() pega o regex, aplica-o a uma string (que é colocada entre parênteses) e retorna true ou false se o seu padrão encontrar algo ou não.
*/
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
console.log(testRegex.test(testStr));
// O método test aqui retorna true.
/*
Aplique o regex myRegexna string myStringusando o .test()método.
*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);
/*
Você deve usar .test() para testar o regex.

Seu resultado deve retornar true.
*/