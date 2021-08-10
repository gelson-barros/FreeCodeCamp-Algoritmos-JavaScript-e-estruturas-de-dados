/*
Especifique apenas o menor número de correspondências
Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você só deseja especificar o número inferior de padrões sem limite superior.

Para especificar apenas o número inferior de padrões, mantenha o primeiro número seguido por uma vírgula.

Por exemplo, para corresponder apenas a string hahcom a letra que aaparece pelo menos 3vezes, sua regex seria /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
Em ordem, as três testchamadas voltaria true, falsee true.

Altere a regex haRegexpara corresponder à palavra Hazzahapenas quando ela tiver quatro ou mais letras z.
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

/*
Seu regex deve usar chaves.

Seu regex não deve corresponder à string Hazzah

Seu regex não deve corresponder à string Hazzzah

Seu regex deve corresponder à string Hazzzzah

Seu regex deve corresponder à string Hazzzzzah

Seu regex deve corresponder à string Hazzzzzzah

Sua regex deve corresponder à string Hazzahcom 30 z's nela.
*/