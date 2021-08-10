/*
Corresponder a todos os não-números
O último desafio mostrou como pesquisar dígitos usando o atalho \dcom letras minúsculas d. Você também pode pesquisar não-dígitos usando um atalho semelhante que usa letras maiúsculas D.

O atalho para procurar caracteres não-dígitos é \D. Isso é igual à classe de caracteres [^0-9], que procura um único caractere que não seja um número entre zero e nove.

Use a classe de caracteres abreviados para não dígitos \Dpara contar quantos não dígitos existem nos títulos de filmes.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

/*
Seu regex deve usar o caractere de atalho para corresponder a caracteres não-dígitos

Seu regex deve usar o sinalizador global.

Sua regex não deve encontrar não-dígitos na string 9.

Sua regex deve encontrar 6 não dígitos na string Catch 22.

Sua regex deve encontrar 11 não dígitos na string 101 Dalmatians.

Sua regex deve encontrar 15 não dígitos na string One, Two, Three.

Sua regex deve encontrar 12 não dígitos na string 21 Jump Street.

Sua regex deve encontrar 17 não dígitos na string 2001: A Space Odyssey.
*/