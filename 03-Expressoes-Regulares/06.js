/*
Encontre mais do que a primeira correspondência

Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez.
*/
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
let are = testStr.match(ourRegex);
console.log(are);
// Aqui match voltaria ["Repeat"].

/*
Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o g sinalizador.
*/
let repeatRegex = /Repeat/g;
let ac = testStr.match(repeatRegex);
console.log(ac);
// E aqui matchretorna o valor["Repeat", "Repeat", "Repeat"]
/*
Usando o regex starRegex, encontre e extraia ambas as Twinkle palavras da string twinkleStar.

Nota
Você pode ter vários sinalizadores em seu regex, como/search/gi
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);
/*
Seu regex starRegexdeve usar o sinalizador global g

Seu regex starRegex deve usar a sinalização que não diferencia maiúsculas de minúsculasi

Sua correspondência deve corresponder às duas ocorrências da palavra Twinkle

Sua correspondência resultdeve ter dois elementos.
*/