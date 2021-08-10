/*
Compreendendo o valor indefinido retornado de uma função

Uma função pode incluir a return instrução, mas não é necessário. No caso de a função não ter uma return instrução, quando você a chama, a função processa o código interno, mas o valor retornado é undefined.

Exemplo

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
addSumé uma função sem return declaração. A função mudará a sum variável global , mas o valor retornado da função é undefined.

Crie uma função addFive sem argumentos. Esta função adiciona 5 à sum variável, mas seu valor retornado é undefined.
*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive (){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

/*
addFive deve ser uma função.

Depois que as duas funções forem executadas, o sumd eve ser igual a 8.

O valor retorna do de addFive deveria ser undefined.

Dentro da addFive função, você deve adicionar 5 à sum variável.
*/