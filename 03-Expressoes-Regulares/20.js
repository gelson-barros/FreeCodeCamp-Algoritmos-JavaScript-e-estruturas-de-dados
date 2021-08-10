/*
Corresponder a todos os números

Você aprendeu atalhos para padrões de string comuns, como alfanuméricos. Outro padrão comum é procurar apenas dígitos ou números.

O atalho para procurar caracteres de dígitos é \d, com letras minúsculas d. Isso é igual à classe de caracteres [0-9], que procura um único caractere de qualquer número entre zero e nove.

Use a classe de caracteres abreviados \dpara contar quantos dígitos existem nos títulos dos filmes. Os números escritos ("seis" em vez de 6) não contam.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

/*
Seu regex deve usar o caractere de atalho para corresponder a caracteres de dígitos

Seu regex deve usar o sinalizador global.

Seu regex deve encontrar 1 dígito na string 9.

Seu regex deve encontrar 2 dígitos na string Catch 22.

Seu regex deve encontrar 3 dígitos na string 101 Dalmatians.

Sua regex não deve encontrar dígitos na string One, Two, Three.

Seu regex deve encontrar 2 dígitos na string 21 Jump Street.

Seu regex deve encontrar 4 dígitos na string 2001: A Space Odyssey.
*/