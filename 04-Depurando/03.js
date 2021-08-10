/*
Use typeof para verificar o tipo de uma variável

Você pode usar typeofpara verificar a estrutura de dados, ou tipo, de uma variável. Isso é útil na depuração ao trabalhar com vários tipos de dados. Se você pensa que está adicionando dois números, mas um deles é na verdade uma string, os resultados podem ser inesperados. Erros de tipo podem se esconder em cálculos ou chamadas de função. Tenha cuidado especialmente ao acessar e trabalhar com dados externos na forma de um objeto JavaScript Object Notation (JSON).

Aqui estão alguns exemplos usando typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
No fim, a consola mostrará as cordas string, number, object, e object.

JavaScript reconhece seis tipos primitivos de dados (imutáveis): Boolean, Null, Undefined, Number, String, e Symbol(nova com ES6) e um tipo para itens mutáveis: Object. Observe que, em JavaScript, os arrays são tecnicamente um tipo de objeto.

Adicione duas console.log()instruções para verificar typeofcada uma das duas variáveis sevene threeno código.
*/

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

/*
Seu código deve ser usado typeofem duas console.log()instruções para verificar o tipo das variáveis.

Seu código deve ser usado typeofpara verificar o tipo da variável seven.

Seu código deve ser usado typeofpara verificar o tipo da variável three.
*/