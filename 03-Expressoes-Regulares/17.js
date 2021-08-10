/*
Match Ending String Patterns

No último desafio, você aprendeu a usar o caractere circunflexo para pesquisar padrões no início de strings. Também existe uma maneira de pesquisar padrões no final das strings.

Você pode pesquisar o final das strings usando o caractere de cifrão $no final da regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
A primeira testchamada retornaria true, enquanto a segunda retornaria false.

Use o caractere âncora ( $) para corresponder à string cabooseno final da string caboose.
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

/*
Você deve pesquisar caboosecom a $âncora do cifrão em sua regex.

Seu regex não deve usar nenhum sinalizador.

Você deve combinar cabooseno final da stringThe last car on a train is the caboose
*/