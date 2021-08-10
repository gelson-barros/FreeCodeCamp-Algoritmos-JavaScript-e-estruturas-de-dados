/*
Combine um único personagem com múltiplas possibilidades

Você aprendeu como combinar padrões literais ( /literal/) e caractere curinga ( /./). Esses são os extremos das expressões regulares, onde uma encontra correspondências exatas e a outra combina com tudo. Existem opções que são um equilíbrio entre os dois extremos.

Você pode pesquisar um padrão literal com alguma flexibilidade com classes de caracteres . As classes de caracteres permitem que você defina um grupo de caracteres que deseja combinar, colocando-os entre colchetes ( [e ]).

Por exemplo, você deseja corresponder bag, bige bug, mas não bog. Você pode criar o regex /b[aiu]g/para fazer isso. A [aiu]é a classe de personagem que só irá coincidir com os personagens a, iou u.
*/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));
/*
No fim, os quatro match chamadas iria retornar os valores ["big"], ["bag"], ["bug"], e null.

Use uma classe de caráter com vogais ( a, e, i, o, u) no seu regex vowelRegexpara encontrar todas as vogais na cadeia quoteSample.

Nota: certifique-se de combinar as vogais maiúsculas e minúsculas.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
// console.log(vowelRegex.test(quoteSample));
console.log(result);
/*
Você deve encontrar todas as 25 vogais.

Sua regex vowelRegexdeve usar uma classe de caractere.

Seu regex vowelRegexdeve usar o sinalizador global.

Seu regex vowelRegexdeve usar o sinalizador que não diferencia maiúsculas de minúsculas.

Sua regex não deve corresponder a nenhuma consoante.
*/