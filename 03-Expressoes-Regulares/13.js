/*
Corresponder caracteres que ocorrem zero ou mais vezes

O último desafio usou o + sinal de mais para procurar caracteres que ocorrem uma ou mais vezes. Também existe uma opção que combina caracteres que ocorrem zero ou mais vezes.

O personagem de fazer isso é o asterisco ou estrela: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

/*
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
Em ordem, as três matchchamadas iria retornar os valores ["goooooooo"], ["g"]e null.

Para este desafio, chewieQuote foi inicializado como a string Aaaaaaaaaaaaaaaarrrgh!nos bastidores. Crie uma regex chewieRegex que use o * caractere para corresponder a um A caractere maiúsculo imediatamente seguido por zero ou mais a caracteres minúsculos em chewieQuote. Sua regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.
*/

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh"; 
let chewieRegex = /A*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

/*
Sua regex chewieRegex deve usar o * caractere para corresponder a zero ou mais a caracteres.

Sua regex deve corresponder à string A em chewieQuote.

Sua regex deve corresponder à string Aaaaaaaaaaaaaaaaem chewieQuote.

Sua regex chewieRegex deve corresponder a 16 caracteres em chewieQuote.

Sua regex não deve corresponder a nenhum caractere da string He made a fair move. Screaming about it can't help you.

Sua regex não deve corresponder a nenhum caractere da string Let him have it. It's not wise to upset a Wookiee.
*/