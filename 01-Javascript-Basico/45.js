/*
Manipular matrizes com unshift ()

Não apenas você pode shift elementos fora do início de uma matriz, você também pode unshift elementos no início de uma matriz, ou seja, adicionar elementos na frente da matriz.

.unshift() funciona exatamente como .push(), mas em vez de adicionar o elemento no final da matriz, unshift()adiciona o elemento no início da matriz.

Exemplo:

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Após o shift, ourArray teria o valor ["J", "cat"]. Após o unshift, ourArrayteria o valor ["Happy", "J", "cat"].

Adicione ["Paul",35] ao início da myArray variável usando unshift().
*/

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);

/*
myArrayagora deveria ter [["Paul", 35], ["dog", 3]].
*/