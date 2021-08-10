/*
Fugindo de citações literais em cordas
Ao definir uma string, você deve começar e terminar com aspas simples ou duplas. O que acontece quando você precisa de uma citação literal: "ou 'dentro de sua string?

Em JavaScript, você pode escapar de uma citação ao considerá-la como um final de citação de string, colocando uma barra invertida ( \) na frente da citação.

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Isso sinaliza ao JavaScript que a seguinte citação não é o fim da string, mas deve aparecer dentro da string. Portanto, se você imprimir isso no console, obterá:

Alan said, "Peter is learning JavaScript".
Use barras invertidas para atribuir uma string à myStr variável para que se você fosse imprimi-la no console, você veria:

I am a "double quoted" string inside "double quotes".
*/

var myStr = "I am a \"double quoted\" string inside \"double quotes\""; // Change this line
console.log(myStr);
/*
Você deve usar duas aspas duplas (") e quatro aspas duplas de escape ( \").

A variável myStr deve conter a string: I am a "double quoted" string inside "double quotes".
*/