/*
Acessando propriedades de objetos com notação de colchetesPassado
A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ( []). Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, você precisará usar a notação de colchetes.

No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços.

Aqui está um exemplo de como usar a notação de colchetes para ler a propriedade de um objeto:

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"]seria a string Kirk, myObj['More Space']seria a string Spocke myObj["NoSpace"]seria a string USS Enterprise.

Observe que os nomes das propriedades com espaços devem estar entre aspas (simples ou duplas).

Leia os valores das propriedades an entreee the drinkdo testObjuso da notação de colchetes e atribua-os a entreeValuee drinkValuerespectivamente.
*/

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

/*
entreeValue deve ser uma string

O valor de entreeValuedeve ser a stringhamburger

drinkValue deve ser uma string

O valor de drinkValuedeve ser a stringwater

Você deve usar a notação de colchetes duas vezes
*/

