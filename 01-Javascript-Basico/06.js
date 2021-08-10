/*
Compreendendo variáveis ​​não inicializadas
Quando as variáveis ​​JavaScript são declaradas, elas têm um valor inicial de undefined. Se você fizer uma operação matemática em uma undefinedvariável, seu resultado será o NaNque significa "Não é um número" . Se você concatenar uma string com uma undefinedvariável, obterá uma string literal de undefined.

Inicializar as três variáveis a, be, ccom 5, 10e, "I am a"respectivamente, de modo que eles não serão undefined.
*/

// Only change code below this line //Apenas altere o código abaixo desta linha
var a = 5;
var b = 10;
var c = "I am";
// Only change code above this line //Apenas altere o código acima desta linha

a = a + 1;
b = b + 5;
c = c + " String!";

/*
a deve ser definido e avaliado para ter o valor de 6.

b deve ser definido e avaliado para ter o valor de 15.

c não deve conter undefined e deve ter um valor de string I am a String!

Você não deve alterar o código abaixo do comentário especificado.
*/