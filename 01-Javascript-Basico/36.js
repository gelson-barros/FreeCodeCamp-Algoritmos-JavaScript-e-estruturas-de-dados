/*
Word Blanks
Agora usaremos nosso conhecimento de strings para construir um jogo de palavras no estilo " Mad Libs " que chamamos de "Word Blanks". Você criará uma frase do estilo (opcionalmente bem-humorada) "Preencha as lacunas".

Em um jogo "Mad Libs", você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Em seguida, você preenche as peças que faltam com palavras de sua escolha de uma forma que a frase completa faça sentido.

Considere esta frase - It was really ____, and we ____ our selves ____.. Esta frase tem três peças faltando - um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-la. Podemos então atribuir a frase completa a uma variável da seguinte maneira:

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " our selves " + "silly" + ".";

Neste desafio, fornecemos um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando palavras de sua escolha, junto com as palavras que fornecemos.

Você vai precisar usar o operador de concatenação + para construir uma nova string, usando as variáveis fornecidas: myNoun, myAdjective, myVerb, e myAdverb. Em seguida, você atribuirá a string formada à wordBlanks variável. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará levar em conta os espaços em sua string, de modo que a frase final tenha espaços entre todas as palavras. O resultado deve ser uma frase completa.
*/

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line


/*
wordBlanks deve ser uma string.

Você não deve alterar os valores atribuídos a myNoun, myVerb, myAdjectiveou myAdverb.

Você não deve usar diretamente os valores dog, ran, big, ou quickly para criar wordBlanks.

wordBlanks deve conter todas as palavras atribuídas às variáveis myNoun, myVerb, myAdjectivee myAdverb separados por caracteres não-palavra (e quaisquer palavras adicionais em sua madlib).
*/