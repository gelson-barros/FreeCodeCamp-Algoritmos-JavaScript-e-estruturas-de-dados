/*
Encontre um ou mais criminosos em uma caçada

É hora de fazer uma pausa e testar suas novas habilidades de redação de regex. Um grupo de criminosos escapou da prisão e fugiu, mas você não sabe quantos. No entanto, você sabe que eles ficam próximos quando estão perto de outras pessoas. Você é responsável por encontrar todos os criminosos de uma vez.

Aqui está um exemplo para revisar como fazer isso:

A regex /z+/corresponde à letra zquando ela aparece uma ou mais vezes consecutivas. Ele encontraria correspondências em todas as seguintes strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Mas ele não encontra correspondências nas seguintes strings, uma vez que não há zcaracteres de letras :

""
"ABC"
"abcabc"
Escreva um regex ganancioso que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra maiúscula C.
*/

let crowd = "P1P2P3P4P5P6CCCP7P8P9";

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

/*
Seu regex deve corresponder a um criminoso ( C) na stringC

Seu regex deve corresponder a dois criminosos ( CC) na stringCC

Sua regex deve corresponder a três criminosos ( CCC) na string P1P5P4CCCcP2P6P3.

Seu regex deve corresponder a cinco criminosos ( CCCCC) na stringP6P2P7P4P5CCCCCP3P1

Sua regex não deve corresponder a nenhum criminoso na string vazia ""

Sua regex não deve corresponder a nenhum criminoso na string P1P2P3

Sua regex deve corresponder a cinquenta criminosos ( CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) na string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.
*/