/*
Especifique o número exato de correspondências
Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você deseja apenas um número específico de correspondências.

Para especificar um certo número de padrões, basta ter aquele número entre as chaves.

Por exemplo, para corresponder apenas a palavra hahaos a 3tempos das letras , sua regex seria /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
Em ordem, as três testchamadas voltaria false, truee false.

Altere a regex timRegexpara corresponder à palavra Timberapenas quando ela tiver quatro letras m.
*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

/*
Seu regex deve usar chaves.

Seu regex não deve corresponder à string Timber

Seu regex não deve corresponder à string Timmber

Seu regex não deve corresponder à string Timmmber

Seu regex deve corresponder à string Timmmmber

Sua regex não deve corresponder à string Timbercom 30 m's nela.
*/