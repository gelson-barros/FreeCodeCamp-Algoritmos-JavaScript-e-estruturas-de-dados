/*
Capturar nomes de variáveis ​​e funções com erros ortográficos

Os métodos console.log()e typeofsão as duas maneiras principais de verificar os valores intermediários e os tipos de saída do programa. Agora é hora de entrar nas formas comuns que os bugs assumem. Um problema de nível de sintaxe com o qual digitadores rápidos podem se lamentar é o humilde erro de grafia.

Caracteres transpostos, ausentes ou mal capitalizados em uma variável ou nome de função farão com que o navegador procure um objeto que não existe - e reclamará na forma de um erro de referência. Os nomes de variáveis ​​e funções JavaScript diferenciam maiúsculas de minúsculas.

Corrija os dois erros de ortografia no código para que o netWorkingCapitalcálculo funcione.
*/

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

/*
Verifique a grafia das duas variáveis ​​usadas no cálculo de netWorkingCapital, a saída do console deve mostrar que "Capital de giro líquido é: 2".

Não deve haver instâncias de variáveis ​​com erros ortográficos no código.

A receivablesvariável deve ser declarada e usada corretamente no código.

Não deve haver instâncias de variáveis ​​com erros ortográficos no código.

A payablesvariável deve ser declarada e usada corretamente no código.
*/