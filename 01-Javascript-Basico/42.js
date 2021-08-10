/*
Manipular matrizes com push ()

Uma maneira fácil de anexar dados ao final de uma matriz é por meio da push() função.

.push() pega um ou mais parâmetros e os "empurra" para o final do array.

Exemplos:

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 agora tem o valor [1, 2, 3, 4] e arr2 tem o valor ["Stimpson", "J", "cat", ["happy", "joy"]].

Vá ["dog", 3] para o final da myArray variável.

*/

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

/*
myArray agora deve ser igual [["John", 23], ["cat", 2], ["dog", 3]].
*/