/*
Substituir Loops usando RecursãoPassado
Recursão é o conceito de que uma função pode ser expressa em termos de si mesma. Para ajudar a entender isso, comece pensando na seguinte tarefa: multiplique os primeiros nelementos de um array para criar o produto desses elementos. Usando um forloop, você pode fazer isso:

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
No entanto, observe isso multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Isso significa que você pode reescrever multiplyem termos de si mesmo e nunca precisa usar um loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
A versão recursiva de multiplyquebra assim. No caso base , onde n <= 0, ele retorna 1. Para valores maiores de n, ele chama a si mesmo, mas com n - 1. Essa chamada de função é avaliada da mesma maneira, chamando multiplynovamente até n <= 0. Neste ponto, todas as funções podem retornar e o original multiplyretorna a resposta.

Nota: As funções recursivas devem ter um caso base quando retornam sem chamar a função novamente (neste exemplo, quando n <= 0), caso contrário, nunca poderão terminar a execução.

Escreva uma função recursiva,, sum(arr, n)que retorna a soma dos primeiros nelementos de uma matriz arr.
*/

function sum(arr, n) {
    // Only change code below this line
    // Only change code above this line
}

/*
sum([1], 0) deve ser igual a 0.

sum([2, 3, 4], 1) deve ser igual a 2.

sum([2, 3, 4, 5], 3) deve ser igual a 9.

Seu código não deve confiar em qualquer tipo de loops ( forou whileou funções de ordem superior, como forEach, map, filter, ou reduce.).

Você deve usar recursão para resolver este problema.
*/