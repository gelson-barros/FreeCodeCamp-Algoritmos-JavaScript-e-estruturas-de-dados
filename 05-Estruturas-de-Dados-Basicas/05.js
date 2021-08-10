/*
Remover itens usando splice ()

Ok, então aprendemos como remover elementos do início e do final de arrays usando shift()e pop(), mas e se quisermos remover um elemento de algum lugar no meio? Ou remover mais de um elemento de uma vez? Bem, é aí que splice()entra. splice()Nos permite fazer exatamente isso: remover qualquer número de elementos consecutivos de qualquer lugar em um array.

splice()pode ter até 3 parâmetros, mas por agora, vamos nos concentrar apenas nos primeiros 2. Os primeiros dois parâmetros de splice()são inteiros que representam índices, ou posições, do array que splice()está sendo chamado. E lembre-se, os arrays são indexados por zero , portanto, para indicar o primeiro elemento de um array, usaríamos 0. splice()O primeiro parâmetro representa o índice na matriz a partir do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem excluídos. Por exemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Aqui, removemos 2 elementos, começando com o terceiro elemento (no índice 2). arrayteria o valor ['today', 'was', 'great'].

splice() não apenas modifica a matriz em que está sendo chamada, mas também retorna uma nova matriz contendo o valor dos elementos removidos:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArraytem o valor ['really', 'happy'].

Inicializamos um array arr. Use splice()para remover elementos de arr, de modo que contenha apenas elementos que somam o valor de 10.
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
const myArr = arr.splice(1, 4);
// Only change code above this line
console.log(arr);

/*
Você não deve alterar a linha original de const arr = [2, 4, 5, 1, 7, 5, 2, 1];.

arr deve conter apenas elementos que somam 10.

Seu código deve utilizar o splice()método em arr.

A emenda deve apenas remover elementos arre não adicionar nenhum elemento adicional a arr.
*/