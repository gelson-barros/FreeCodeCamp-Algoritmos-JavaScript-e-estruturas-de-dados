/*
Cifra César
Uma das cifras mais simples e mais conhecidas é a cifra de César , também conhecida como cifra de deslocamento . Em uma cifra de deslocamento, os significados das letras são alterados por uma determinada quantidade.

Um uso moderno comum é a cifra ROT13 , onde os valores das letras são deslocados em 13 casas. Assim A ↔ N, B ↔ Oe assim por diante.

Escreva uma função que recebe uma string codificada ROT13 como entrada e retorna uma string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (ou seja, espaços, pontuação), mas passe-os adiante.
*/
function rot13(str) {
    let codigo13 = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
    let cifra13 = str.split('').map(letter => {
        return codigo13.includes(letter) ? codigo13.charAt(codigo13.indexOf(letter) + 13) : letter;
    }).join('');
    console.log(cifra13);
}

rot13("SERR PBQR PNZC");

rot13("SERR PBQR PNZC") // deve decodificar para a string FREE CODE CAMP

rot13("SERR CVMMN!") // deve decodificar para a string FREE PIZZA!

rot13("SERR YBIR?") // deve decodificar para a string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // deve decodificar para a string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
