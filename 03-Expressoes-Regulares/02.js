/*
Match Literal Strings

No último desafio, você procurou a palavra Hello usando a expressão regular /Hello/. Essa regex procurou uma correspondência literal da string Hello. Aqui está outro exemplo de pesquisa por uma correspondência literal da string Kevin:
*/
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));
// Esta testligação retornará true.
/*
Quaisquer outras formas de Kevin não corresponderão. Por exemplo, a regex /Kevin/ não corresponderá a kevin ou KEVIN.
*/
let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr));
// Esta testligação retornará false.
/*
Um desafio futuro mostrará como combinar essas outras formas também.

Complete a regex waldoRegex a ser encontrada "Waldo"na string waldo Is Hiding com uma correspondência literal.
*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result)
/*
Seu regex waldoRegexdeve encontrar a stringWaldo

Seu regex waldoRegexnão deve pesquisar mais nada.

Você deve realizar uma correspondência literal de string com sua regex.
*/