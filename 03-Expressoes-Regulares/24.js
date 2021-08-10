/*
Corresponder caracteres sem espaço em branco

Você aprendeu a pesquisar por espaços em branco usando \s, com letras minúsculas s. Você também pode pesquisar tudo, exceto espaços em branco.

Pesquise por espaços não em branco usando \S, que é uma letra maiúscula s. Este padrão não corresponderá a espaços em branco, retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar que é semelhante à classe de personagem [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
O valor retornado pelo .lengthmétodo seria 32.

Altere o regex countNonWhiteSpacepara procurar vários caracteres que não sejam de espaço em branco em uma string.
*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/*
Seu regex deve usar o sinalizador global.

Sua regex deve usar o caractere abreviado \Spara corresponder a todos os caracteres que não sejam espaços em branco.

Seu regex deve encontrar 35 sem espaços na string Men are from Mars and women are from Venus.

Seu regex deve encontrar 23 não espaços na string Space: the final frontier.

Seu regex deve encontrar 21 não espaços na string MindYourPersonalSpace
*/