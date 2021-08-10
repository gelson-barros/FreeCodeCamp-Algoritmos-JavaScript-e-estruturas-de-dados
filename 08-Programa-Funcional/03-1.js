// tabs é um conjunto de títulos de cada site aberto na janela
var Janela = function (tabs) {
    this.tabs = tabs; // Nós mantemos um registro da matriz dentro do objeto
};

// Quando você une duas janelas em uma janela
Janela.prototype.join = function (otherJanela) {
    this.tabs = this.tabs.concat(otherJanela.tabs);
    return this;
};

// Quando você abre uma nova tab no final
Janela.prototype.tabOpen = function (tab) {
    this.tabs.push("new tab"); // Vamos abrir uma nova tab agora
    return this;
};

// Quando você fecha uma tab
Janela.prototype.tabClose = function (index) {
    // Only change code below this line
    // console.log(this.tabs);
    var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    // console.log(tabsBeforeIndex);
    var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
    // console.log(tabsAfterIndex);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    // console.log(this.tabs);

    // Only change code above this line

    return this;
};

// Vamos criar três janelas de navegador
var workJanela = new Janela([
    "GMail",
    "Inbox",
    "Work mail",
    "Docs",
    "freeCodeCamp",
]); // Sua caixa de correio, unidade e outros locais de trabalho

var socialJanela = new Janela(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
var videoJanela = new Janela(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Agora execute a abertura, o fechamento da tab e outras operações
// var finalTabs = socialJanela
//     .tabOpen() // Abra uma nova tab para memes de gatos
//     .join(videoJanela.tabClose(2)) // Feche a terceira tab na janela do vídeo e entre
//     .join(workJanela.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);
console.log(
    socialJanela
        .tabOpen()
        .join(videoJanela.tabClose(2))
        .join(workJanela.tabClose(1).tabOpen())
);
