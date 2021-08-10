/*
Compreenda os perigos de usar o código imperativo
A programação funcional é um bom hábito. Ele mantém seu código fácil de gerenciar e evita bugs sorrateiros. Mas antes de chegarmos lá, vamos dar uma olhada em uma abordagem imperativa da programação para destacar onde você pode ter problemas.

Em inglês (e em muitos outros idiomas), o tempo imperativo é usado para dar comandos. Da mesma forma, um estilo imperativo de programação é aquele que fornece ao computador um conjunto de instruções para executar uma tarefa.

Freqüentemente, as instruções mudam o estado do programa, como atualizar variáveis ​​globais. Um exemplo clássico é escrever um forloop que fornece instruções exatas para iterar sobre os índices de um array.

Em contraste, a programação funcional é uma forma de programação declarativa. Você diz ao computador o que deseja fazer, chamando um método ou função.

JavaScript oferece muitos métodos predefinidos que tratam de tarefas comuns, então você não precisa escrever como o computador deve executá-las. Por exemplo, em vez de usar o forloop mencionado acima, você pode chamar o mapmétodo que trata dos detalhes da iteração em um array. Isso ajuda a evitar erros de semântica, como os "Erros desativados por um" que foram abordados na seção Depuração.

Considere o cenário: você está navegando na web em seu navegador e deseja rastrear as guias que abriu. Vamos tentar modelar isso usando algum código orientado a objetos simples.

Um objeto Janela é composto de guias e, geralmente, você tem mais de uma janela aberta. Os títulos de cada site aberto em cada objeto Window são mantidos em uma matriz. Depois de trabalhar no navegador (abrindo novas guias, mesclando janelas e fechando guias), você deseja imprimir as guias que ainda estão abertas. As guias fechadas são removidas da matriz e novas guias (para simplificar) são adicionadas ao final dela.

O editor de código mostra uma implementação desta funcionalidade com funções para tabOpen(), tabClose()e join(). O array tabsfaz parte do objeto Window que armazena o nome das páginas abertas.

Examine o código no editor. Está usando um método que tem efeitos colaterais no programa, causando um comportamento incorreto. A lista final de guias abertas, armazenadas em finalTabs.tabs, deve ser, ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']mas a lista produzida pelo código é um pouco diferente.

Mude Window.prototype.tabClosepara que remova a guia correta.
*/

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/*
finalTabs.tabs deveria estar ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
*/