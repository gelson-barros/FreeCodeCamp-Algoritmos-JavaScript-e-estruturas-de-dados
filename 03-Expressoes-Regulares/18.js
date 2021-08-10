/*
Corresponder a todas as letras e números

Usando classes de caracteres, você foi capaz de pesquisar todas as letras do alfabeto com [a-z]. Esse tipo de classe de caractere é comum o suficiente para que haja um atalho para ela, embora inclua alguns caracteres extras também.

A classe de caractere mais próxima em JavaScript para corresponder ao alfabeto é \w. Este atalho é igual a [A-Za-z0-9_]. Esta classe de caracteres combina letras maiúsculas e minúsculas mais números. Observe que essa classe de caractere também inclui o caractere de sublinhado ( _).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
Todas as quatro testchamadas retornariam true.

Estas classes de personagens de atalho são também conhecidas como classes de personagens taquigrafia .

Use a classe de caracteres abreviados \wpara contar o número de caracteres alfanuméricos em várias aspas e strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

/*
Seu regex deve usar o sinalizador global.

Sua regex deve usar o caractere abreviado \wpara corresponder a todos os caracteres alfanuméricos.

Seu regex deve encontrar 31 caracteres alfanuméricos na string The five boxing wizards jump quickly.

Seu regex deve encontrar 32 caracteres alfanuméricos na string Pack my box with five dozen liquor jugs.

Seu regex deve encontrar 30 caracteres alfanuméricos na string How vexingly quick daft zebras jump!

Seu regex deve encontrar 36 caracteres alfanuméricos na string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/