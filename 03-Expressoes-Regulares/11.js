/*
Corresponder a caracteres únicos não especificados

Até agora, você criou um conjunto de caracteres que deseja combinar, mas também pode criar um conjunto de caracteres que não deseja combinar. Esses tipos de conjuntos de caracteres são chamados de conjuntos de caracteres negados .

Para criar um conjunto de caracteres negado, coloque um caractere circunflexo ( ^) após o colchete de abertura e antes dos caracteres que você não deseja corresponder.

Por exemplo, /[^aeiou]/gi corresponde a todos os caracteres que não são vogais. Note-se que personagens como ., !, [, @, / e espaços em branco são combinados - o conjunto de caracteres vogal negada única exclui os caracteres de vogais.

Crie uma única regex que corresponda a todos os caracteres que não sejam um número ou vogal. Lembre-se de incluir os sinalizadores apropriados na regex.
*/

let quoteSample = "3 blind mice.";
let abcedario 
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*
Sua regex myRegexdeve corresponder a 9 itens.

Seu regex myRegexdeve usar o sinalizador global.

Seu regex myRegexdeve usar o sinalizador que não diferencia maiúsculas de minúsculas.
*/