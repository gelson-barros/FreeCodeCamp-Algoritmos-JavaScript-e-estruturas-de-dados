/*
Entenda a terminologia de programação funcional
A equipe FCC mudou de humor e agora quer dois tipos de chá: chá verde e chá preto. Fato Geral: As oscilações de humor do cliente são bastante comuns.

Com essas informações, precisaremos revisar a getTeafunção do último desafio para lidar com vários pedidos de chá. Podemos modificar getTeapara aceitar uma função como parâmetro para poder mudar o tipo de chá que prepara. Isso torna getTeamais flexível e dá ao programador mais controle quando as solicitações do cliente são alteradas.

Mas, primeiro, vamos cobrir algumas terminologias funcionais:

Retornos de chamada são as funções que são transferidas ou passadas para outra função para decidir a invocação dessa função. Você pode tê-los visto passados ​​para outros métodos, por exemplo filter, em , a função de retorno de chamada informa ao JavaScript os critérios de como filtrar um array.

Funções que podem ser atribuídas a uma variável, passadas para outra função ou retornadas de outra função como qualquer outro valor normal, são chamadas de funções de primeira classe . Em JavaScript, todas as funções são funções de primeira classe.

As funções que recebem uma função como argumento ou retornam uma função como um valor de retorno são chamadas de funções de ordem superior .

Quando as funções são passadas ou retornadas de outra função, essas funções que foram passadas ou retornadas podem ser chamadas de lambda .

Prepare 27 xícaras de chá verde e 13 xícaras de chá preto e armazene-as em tea4GreenTeamFCCe tea4BlackTeamFCCvariáveis, respectivamente. Observe que a getTeafunção foi modificada, portanto, agora ela assume uma função como o primeiro argumento.

Nota: os dados (o número de xícaras de chá) são fornecidos como o último argumento. Discutiremos isso mais em lições posteriores.
*/

// Função que retorna uma string representando uma xícara de chá verde
const prepareGreenTea = () => 'greenTea';

// Função que retorna uma string representando uma xícara de chá preto
const prepareBlackTea = () => 'blackTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, o a seguinte função retorna uma matriz de strings (cada uma representando uma xícara de
um tipo específico de chá).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

/*
A tea4GreenTeamFCCvariável deve conter 27 xícaras de chá verde para a equipe.

A tea4GreenTeamFCCvariável deve conter xícaras de chá verde.

A tea4BlackTeamFCCvariável deve conter 13 xícaras de chá preto.

A tea4BlackTeamFCCvariável deve conter xícaras de chá preto.
*/