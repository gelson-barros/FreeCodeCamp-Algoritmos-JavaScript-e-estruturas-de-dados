/*
Ignorar maiúsculas e minúsculas durante a correspondência

Até agora, você olhou para regexes para fazer correspondências literais de strings. Mas às vezes, você também pode querer combinar diferenças de maiúsculas e minúsculas.

Maiúsculas e minúsculas (ou às vezes letras maiúsculas) é a diferença entre letras maiúsculas e minúsculas. Exemplos de letras maiúsculas são A, B e C. Exemplos de minúsculas são a, b e c.

Você pode combinar os dois casos usando o que é chamado de sinalizador. Existem outros sinalizadores, mas aqui você se concentrará no sinalizador que ignora maiúsculas e minúsculas - o isinalizador. Você pode usá-lo anexando-o ao regex. Um exemplo de uso desse sinalizador é /ignorecase/i. Este regex pode combinar as cordas ignorecase, igNoreCasee IgnoreCase.

Escreva uma regex fccRegex para corresponder freeCodeCamp, não importa o caso. Sua regex não deve corresponder a nenhuma abreviatura ou variação com espaços.
*/

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result)
/*
Seu regex deve corresponder à string freeCodeCamp

Seu regex deve corresponder à string FreeCodeCamp

Seu regex deve corresponder à string FreecodeCamp

Seu regex deve corresponder à string FreeCodecamp

Seu regex não deve corresponder à string Free Code Camp

Seu regex deve corresponder à string FreeCOdeCamp

Seu regex não deve corresponder à string FCC

Seu regex deve corresponder à string FrEeCoDeCamp

Seu regex deve corresponder à string FrEeCodECamp

Seu regex deve corresponder à string FReeCodeCAmp
*/