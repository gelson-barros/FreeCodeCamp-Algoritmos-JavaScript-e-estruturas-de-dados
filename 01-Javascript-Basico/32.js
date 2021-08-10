/*
Compreender a imutabilidade da corda
Em JavaScript, os String valores são imutáveis , o que significa que não podem ser alterados depois de criados.

Por exemplo, o seguinte código:

var myStr = "Bob";
myStr[0] = "J";
não pode alterar o valor de myStr para Job, porque o conteúdo de myStr não pode ser alterado. Observe que isso não significa que myStr não possa ser alterado, apenas que os caracteres individuais de um literal de string não podem ser alterados. A única maneira de mudar myStr seria atribuí-lo a uma nova string, como esta:

var myStr = "Bob";
myStr = "Job";
Corrija a atribuição para myStrque contenha o valor da string de Hello Worldusar a abordagem mostrada no exemplo acima.
*/

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
console.log(myStr)
// Only change code above this line

/*
myStr deve ter um valor de string Hello World.

Você não deve alterar o código acima do comentário especificado.
*/