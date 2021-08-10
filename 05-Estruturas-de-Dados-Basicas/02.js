/*
Acesse o conteúdo de uma matriz usando a notação de colchetes
A característica fundamental de qualquer estrutura de dados é, obviamente, a capacidade não apenas de armazenar dados, mas também de recuperá-los sob comando. Então, agora que aprendemos como criar um array, vamos começar a pensar sobre como podemos acessar as informações desse array.

Quando definimos um array simples como visto abaixo, existem 3 itens nele:

let ourArray = ["a", "b", "c"];
Em uma matriz, cada item da matriz possui um índice . Este índice dobra como a posição daquele item na matriz e como você o referencia. No entanto, é importante notar, que as matrizes JavaScript são zero indexada , o que significa que o primeiro elemento de uma matriz é na verdade, no zeroth posição, não é a primeira. Para recuperar um elemento de um array, podemos colocar um índice entre colchetes e anexá-lo ao final de um array ou, mais comumente, a uma variável que faz referência a um objeto de array. Isso é conhecido como notação de colchetes . Por exemplo, se quisermos recuperar o ade ourArraye atribuí-lo a uma variável, podemos fazer isso com o seguinte código:

let ourVariable = ourArray[0];
Agora ourVariabletem o valor de a.

Além de acessar o valor associado a um índice, você também pode definir um índice para um valor usando a mesma notação:

ourArray[1] = "not b anymore";
Usando a notação de colchetes, agora redefinimos o item no índice 1 da string bpara not b anymore. Agora ourArrayé ["a", "not b anymore", "c"].

Para completar este desafio, defina a 2ª posição (índice 1) de myArrayqualquer coisa que você quiser, além da letra b.
*/

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "triller";
// Only change code above this line
console.log(myArray);/*

/*
myArray[0] deve ser igual à letra a

myArray[1] não deve ser igual à letra b

myArray[2] deve ser igual à letra c

myArray[3] deve ser igual à letra d
*/