/*
Aprenda sobre programação funcional
A programação funcional é um estilo de programação em que as soluções são funções simples e isoladas, sem quaisquer efeitos colaterais fora do escopo da função: INPUT -> PROCESS -> OUTPUT

A programação funcional é sobre:

1.Funções isoladas - não há dependência do estado do programa, que inclui variáveis ​​globais que estão sujeitas a alterações.
2.Funções puras - a mesma entrada sempre dá a mesma saída.
3.Funções com efeitos colaterais limitados - quaisquer alterações ou mutações no estado do programa fora da função são cuidadosamente controladas.

Acontece que os membros do freeCodeCamp adoram chá.

No editor de código, as funções prepareTeae getTeajá estão definidas para você. Chame a getTeafunção para obter 40 xícaras de chá para a equipe e armazene-as na tea4TeamFCCvariável.
*/

// Função que retorna uma string representando uma xícara de chá verde
const prepareTea = () => 'greenTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, o
a seguinte função retorna uma matriz de strings (cada uma representando uma xícara de
um tipo específico de chá).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

/*
A tea4TeamFCCvariável deve conter 40 xícaras de chá para a equipe.

A tea4TeamFCCvariável deve conter xícaras de chá verde.
*/