/*
Corresponder a qualquer coisa com o período curinga

Às vezes, você não conhece (ou não precisa) saber os caracteres exatos de seus padrões. Pensar em todas as palavras que correspondem, digamos, a um erro ortográfico demoraria muito. Felizmente, você pode economizar tempo usando o caractere curinga:.

O caractere curinga .corresponderá a qualquer um dos caracteres. O curinga também é chamado dote period. Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você queria corresponder hug, huh, hut, e hum, você pode usar o regex /hu./ para coincidir com todas as quatro palavras.
*/
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

// Ambas as test chamadas retornariam true.

/*
Complete a regex unRegex para que ele corresponda as string run, sun, fun, pun, nun, e bun. Sua regex deve usar o caractere curinga.
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result)
/*
Você deve usar o .test()método.

Você deve usar o caractere curinga em sua regex unRegex

Seu regex unRegexdeve corresponder run à string Let us go on a run.

Seu regex unRegexdeve corresponder sun à string The sun is out today.

Seu regex unRegexdeve corresponder fun à string Coding is a lot of fun.

Seu regex unRegexdeve corresponder pun à string Seven days without a pun makes one weak.

Seu regex unRegexdeve corresponder nun à string One takes a vow to be a nun.

Seu regex unRegexdeve corresponder bun à string She got fired from the hot dog stand for putting her hair in a bun.

Seu regex unRegex não deve corresponder à string There is a bug in my code.

Seu regex unRegexnão deve corresponder à string Catch me if you can.
*/