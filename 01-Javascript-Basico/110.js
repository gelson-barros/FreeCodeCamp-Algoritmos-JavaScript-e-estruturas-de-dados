/*Use a recursão para criar uma contagem regressivaPassado
Em um desafio anterior , você aprendeu como usar a recursão para substituir um forloop. Agora, vamos examinar uma função mais complexa que retorna uma matriz de inteiros consecutivos começando com 1o número passado para a função.

Conforme mencionado no desafio anterior, haverá um caso base . O caso base informa à função recursiva quando ela não precisa mais se chamar. É um caso simples em que o valor de retorno já é conhecido. Haverá também uma chamada recursiva que executa a função original com diferentes argumentos. Se a função for escrita corretamente, eventualmente o caso base será alcançado.

Por exemplo, digamos que você quer escrever uma função recursiva que retorna um array contendo os números 1através n. Esta função precisará aceitar um argumento,, nrepresentando o número final. Em seguida, precisará se autodenominar com valores progressivamente menores de naté atingir 1. Você pode escrever a função da seguinte maneira:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
O valor [1, 2, 3, 4, 5]será exibido no console.

A princípio, isso parece contra-intuitivo, pois o valor de n diminui , mas os valores na matriz final estão aumentando . Isso acontece porque o push acontece por último, após o retorno da chamada recursiva. No ponto em que né colocado na matriz, countup(n - 1)já foi avaliado e retornado [1, 2, ..., n - 1].

Definimos uma função chamada countdowncom um parâmetro ( n). A função deve usar recursão para retornar uma matriz contendo os inteiros ncom 1base no nparâmetro. Se a função for chamada com um número menor que 1, a função deve retornar uma matriz vazia. Por exemplo, chamar esta função com n = 5deve retornar a matriz [5, 4, 3, 2, 1]. Sua função deve usar recursão chamando a si mesma e não deve usar loops de nenhum tipo.
*/

// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line

/*
countdown(-1) deve retornar uma matriz vazia.

countdown(10) deveria retornar [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

countdown(5) deveria retornar [5, 4, 3, 2, 1]

Seu código não deve confiar em qualquer tipo de loops ( for, whileou mais elevadas funções de ordem tais como forEach, map, filter, e reduce).

Você deve usar recursão para resolver este problema.
*/