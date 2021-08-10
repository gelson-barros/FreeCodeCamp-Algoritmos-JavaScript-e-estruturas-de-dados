/*
Reutilizar padrões usando grupos de captura
Alguns padrões que você procura ocorrerão várias vezes em uma string. É um desperdício repetir manualmente essa regex. Há uma maneira melhor de especificar quando você tem várias substrings repetidas em sua string.

Você pode pesquisar substrings repetidos usando grupos de captura . Parênteses (e )são usados ​​para localizar substrings repetidas. Você coloca a regex do padrão que se repetirá entre os parênteses.

Para especificar onde a seqüência de repetição aparecerá, você usa uma barra invertida ( \) e, em seguida, um número. Este número começa em 1 e aumenta com cada grupo de captura adicional que você usa. Um exemplo seria \1combinar o primeiro grupo.

O exemplo abaixo corresponde a qualquer palavra que ocorra duas vezes separada por um espaço:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
A testchamada seria retornada truee a matchchamada retornaria ["regex regex", "regex"].

Usar o .match()método em uma string retornará uma matriz com a string que corresponde, junto com seu grupo de captura.

Use grupos de captura em reRegexpara corresponder a uma string que consiste apenas no mesmo número repetido exatamente três vezes separado por espaços simples.

*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;// Change this line
let result = reRegex.test(repeatNum);

/*
Sua regex deve usar a classe de caracteres abreviados para dígitos.

Sua regex deve reutilizar um grupo de captura duas vezes.

Seu regex deve corresponder à string 42 42 42.

Seu regex deve corresponder à string 100 100 100.

Sua regex não deve corresponder à string 42 42 42 42.

Sua regex não deve corresponder à string 42 42.

Sua regex não deve corresponder à string 101 102 103.

Sua regex não deve corresponder à string 1 2 3.

Seu regex deve corresponder à string 10 10 10.
*/