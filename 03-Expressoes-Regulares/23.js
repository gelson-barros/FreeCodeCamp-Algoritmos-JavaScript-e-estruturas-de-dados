/*
Corresponder ao espaço em branco

Os desafios até agora cobriram a correspondência de letras do alfabeto e números. Você também pode combinar o espaço em branco ou espaços entre as letras.

Você pode pesquisar por espaços em branco usando \s, que é uma letra minúscula s. Este padrão não corresponde apenas ao espaço em branco, mas também ao retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar nisso como algo semelhante à classe de personagens [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Esta matchchamada voltaria [" ", " "].

Altere o regex countWhiteSpacepara procurar vários caracteres de espaço em branco em uma string.
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/*
Seu regex deve usar o sinalizador global.

Sua regex deve usar o caractere abreviado \spara corresponder a todos os caracteres de espaço em branco.

Seu regex deve encontrar oito espaços na string Men are from Mars and women are from Venus.

Seu regex deve encontrar três espaços na string Space: the final frontier.

Seu regex não deve encontrar espaços na string MindYourPersonalSpace
*/