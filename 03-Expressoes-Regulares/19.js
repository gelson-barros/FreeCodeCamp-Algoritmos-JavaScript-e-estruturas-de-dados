/*
Combine tudo, exceto letras e números

Você aprendeu que você pode usar um atalho para corresponder alfanuméricos [A-Za-z0-9_]usando \w. Um padrão natural que você pode querer pesquisar é o oposto dos alfanuméricos.

Você pode pesquisar o oposto de \wcom \W. Observe que o padrão oposto usa uma letra maiúscula. Este atalho é o mesmo que [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
A primeira matchchamada retornaria o valor ["%"]e a segunda retornaria ["!"].

Use a classe de caracteres abreviados \Wpara contar o número de caracteres não alfanuméricos em várias aspas e strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

/*
Seu regex deve usar o sinalizador global.

Sua regex deve encontrar 6 caracteres não alfanuméricos na string The five boxing wizards jump quickly..

Sua regex deve usar o caractere abreviado para corresponder a caracteres não alfanuméricos.

Seu regex deve encontrar 8 caracteres não alfanuméricos na string Pack my box with five dozen liquor jugs.

Seu regex deve encontrar 6 caracteres não alfanuméricos na string How vexingly quick daft zebras jump!

Seu regex deve encontrar 12 caracteres não alfanuméricos na string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/