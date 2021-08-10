/*
Iterar por meio de uma matriz com um loop forPassado
Uma tarefa comum em JavaScript é iterar através do conteúdo de um array. Uma maneira de fazer isso é com um forloop. Este código produzirá cada elemento da matriz arrpara o console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Lembre-se de que os arrays têm indexação baseada em zero, o que significa que o último índice do array é length - 1. Nossa condição para este loop é i < arr.length, que interrompe o loop quando ifor igual a length. Neste caso, a última iteração é, i === 4isto é, quando ise torna igual a arr.length - 1e produz 6para o console. Em seguida, iaumenta para 5e o loop termina porque i < arr.lengthé false.

Declare e inicialize uma variável totalpara 0. Use um forloop para adicionar o valor de cada elemento da myArrmatriz total.
*/

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

/*
total deve ser declarado e inicializado como 0.

total deve ser igual a 20.

Você deve usar um forloop para iterar myArr.

Você não deve tentar atribuir diretamente o valor 20 a total.
*/