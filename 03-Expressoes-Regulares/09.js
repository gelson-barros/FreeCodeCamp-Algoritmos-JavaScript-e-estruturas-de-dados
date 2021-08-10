/*
Corresponder letras do alfabeto

Você viu como pode usar conjuntos de caracteres para especificar um grupo de caracteres a serem correspondidos, mas isso é muita digitação quando você precisa combinar uma grande variedade de caracteres (por exemplo, cada letra do alfabeto). Felizmente, há um recurso integrado que torna isso curto e simples.

Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para corresponder usando um hífen: -.

Por exemplo, para combinar letras minúsculas apor meio de evocê usaria [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
Em ordem, as três match chamadas iria retornar os valores ["cat"], ["bat"]e null.

Combine todas as letras da string quoteSample.

Nota : certifique-se de combinar letras maiúsculas e minúsculas.
*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

/*
Sua regex alphabetRegexdeve corresponder a 35 itens.

Seu regex alphabetRegexdeve usar o sinalizador global.

Seu regex alphabetRegexdeve usar o sinalizador que não diferencia maiúsculas de minúsculas.
*/