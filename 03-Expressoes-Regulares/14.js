/*
Encontre personagens com correspondência preguiçosa

Em expressões regulares, uma correspondência gulosa encontra a parte mais longa possível de uma string que se encaixa no padrão regex e a retorna como uma correspondência. A alternativa é chamada de correspondência lenta , que encontra a menor parte possível da string que satisfaça o padrão regex.

Você pode aplicar o regex /t[a-z]*i/à string "titanic". Esta regex é basicamente um padrão que começa t, termina com i e tem algumas letras no meio.

Expressões regulares são gananciosas por padrão, então a correspondência retornaria ["titani"]. Ele encontra a maior subcadeia possível para se ajustar ao padrão.

No entanto, você pode usar o ? caractere para alterá-lo para correspondência preguiçosa. "titanic"comparada com a regex ajustada de /t[a-z]*?i/retornos ["ti"].

Nota: A análise de HTML com expressões regulares deve ser evitada, mas o padrão de correspondência de uma string HTML com expressões regulares é perfeitamente aceitável.

Corrija o regex /<.*>/para retornar a tag HTML <h1>e não o texto "<h1>Winter is coming</h1>". Lembre-se de que o curinga .em uma expressão regular corresponde a qualquer caractere.
*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);

/*
A result variável deve ser uma matriz com <h1> nele

myRegex deve usar correspondência preguiçosa

myRegex não deve incluir a string h1
*/