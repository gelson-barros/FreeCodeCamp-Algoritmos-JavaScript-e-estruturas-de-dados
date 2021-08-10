/*
Especifique o número superior e inferior de correspondências

Lembre-se de que você usa o sinal de mais +para procurar um ou mais caracteres e o asterisco *para procurar zero ou mais caracteres. Eles são convenientes, mas às vezes você deseja corresponder a uma determinada gama de padrões.

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade . Os especificadores de quantidade são usados ​​com chaves ( {e }). Você coloca dois números entre as chaves - para o número inferior e superior de padrões.

Por exemplo, para corresponder apenas à letra que aaparece entre 3e 5tempos na string ah, sua regex seria /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
A primeira testchamada retornaria true, enquanto a segunda retornaria false.

Altere o regex ohRegexpara corresponder à frase inteira Oh noapenas quando for necessário 3para 6letras h.
*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

/*
Seu regex deve usar chaves.

Seu regex não deve corresponder à string Ohh no

Seu regex deve corresponder à string Ohhh no

Seu regex deve corresponder à string Ohhhh no

Seu regex deve corresponder à string Ohhhhh no

Seu regex deve corresponder à string Ohhhhhh no

Seu regex não deve corresponder à string Ohhhhhhh no
*/