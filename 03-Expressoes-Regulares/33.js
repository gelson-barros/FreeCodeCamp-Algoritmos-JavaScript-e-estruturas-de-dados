/*
Remova os espaços em branco do início e do fim

Às vezes, caracteres de espaço em branco em torno de strings não são desejados, mas existem. O processamento típico de strings consiste em remover os espaços em branco no início e no final dele.

Escreva uma regex e use os métodos de string apropriados para remover os espaços em branco no início e no final das strings.

Observação: o String.prototype.trim()método funcionaria aqui, mas você precisará concluir este desafio usando expressões regulares.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

/*
result deve ser igual à corda Hello, World!

Sua solução não deve usar o String.prototype.trim()método.

A resultvariável não deve ser definida diretamente para uma string
*/