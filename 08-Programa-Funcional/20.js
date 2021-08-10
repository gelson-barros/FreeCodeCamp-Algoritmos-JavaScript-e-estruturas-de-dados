/*
Combine uma matriz em uma string usando o método de junção
O joinmétodo é usado para juntar os elementos de um array para criar uma string. Leva um argumento para o delimitador que é usado para separar os elementos da matriz na string.

Aqui está um exemplo:
*/
var arr = ["Hello", "World"];
var str = arr.join(" ");
/*
strteria um valor da string Hello World.

Use o joinmétodo (entre outros) dentro da sentensifyfunção para fazer uma frase com as palavras na string str. A função deve retornar uma string. Por exemplo, I-like-Star-Warsseria convertido para I like Star Wars. Para este desafio, não use o replacemétodo.
*/

function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");

    // Only change code above this line
}
sentensify("May-the-force-be-with-you");

/*
Seu código deve usar o joinmétodo.

Seu código não deve usar o replacemétodo.

sentensify("May-the-force-be-with-you") deve retornar uma string.

sentensify("May-the-force-be-with-you")deve retornar a string May the force be with you.

sentensify("The.force.is.strong.with.this.one")deve retornar a string The force is strong with this one.

sentensify("There,has,been,an,awakening")deve retornar
*/