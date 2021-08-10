/*
Corresponder caracteres que ocorrem uma ou mais vezes

Às vezes, você precisa combinar um caractere (ou grupo de caracteres) que aparece uma ou mais vezes consecutivas. Isso significa que ocorre pelo menos uma vez e pode ser repetido.

Você pode usar o + string para verificar se é esse o caso. Lembre-se de que o caractere ou padrão deve estar presente consecutivamente. Ou seja, o string deve repetir um após o outro.

Por exemplo, /a+/g encontraria uma correspondência em abce retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em aabce retornaria ["aa"].

Se, em vez disso, estivesse verificando a string abab, ele encontraria duas correspondências e retornaria ["a", "a"]porque os acaracteres não estão em uma linha - há um b entre eles. Finalmente, como não há nenhum ana string bcd, ele não encontraria uma correspondência.

Você deseja encontrar correspondências quando a letra s ocorre uma ou mais vezes em Mississippi. Escreva um regex que use o + sinal.
*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

/*
Seu regex myRegex deve usar o + sinal para corresponder a um ou mais scaracteres.

Seu regex myRegex deve corresponder a 2 itens.

A result variável deve ser uma matriz com duas correspondências de ss
*/