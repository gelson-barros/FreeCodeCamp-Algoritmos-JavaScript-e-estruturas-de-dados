/*
Capture o uso misto de citações simples e duplas

JavaScript permite o uso de aspas simples ( ') e duplas ( ") para declarar uma string. Decidir qual usar geralmente se resume à preferência pessoal, com algumas exceções.

Ter duas opções é ótimo quando uma string tem contrações ou outro pedaço de texto que está entre aspas. Apenas tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe.

Aqui estão alguns exemplos de combinação de citações:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
Os dois primeiros estão corretos, mas o terceiro está incorreto.

Obviamente, não há problema em usar apenas um estilo de citações. Você pode escapar das aspas dentro da string usando o \caractere de escape de barra invertida ( ):

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Corrija a string para que use aspas diferentes para o hrefvalor ou escape das existentes. Mantenha as aspas duplas ao redor de toda a string.

*/

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

/*
Seu código deve corrigir as aspas em torno do href valor #Home, alterando-as ou evitando-as.

Seu código deve manter as aspas duplas ao redor de toda a string.
*/