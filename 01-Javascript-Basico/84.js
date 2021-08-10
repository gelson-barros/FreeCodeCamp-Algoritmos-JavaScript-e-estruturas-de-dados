/*
Acessando Propriedades de Objetos com VariáveisPassado
Outro uso da notação de colchetes em objetos é acessar uma propriedade que é armazenada como o valor de uma variável. Isso pode ser muito útil para iterar pelas propriedades de um objeto ou ao acessar uma tabela de pesquisa.

Aqui está um exemplo de uso de uma variável para acessar uma propriedade:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
A string Dobermanseria exibida no console.

Outra maneira de usar esse conceito é quando o nome da propriedade é coletado dinamicamente durante a execução do programa, da seguinte maneira:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
somePropteria um valor de string propName, e a string Johnseria exibida no console.

Observe que não usamos aspas em torno do nome da variável ao usá-lo para acessar a propriedade porque estamos usando o valor da variável, não o nome .

Defina a playerNumbervariável como 16. Em seguida, use a variável para pesquisar o nome do jogador e atribuí-lo a player.
*/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line

/*
playerNumber deveria ser um número

A variável playerdeve ser uma string

O valor de playerdeve ser a stringMontana

Você deve usar a notação de colchetes para acessar testObj

Você não deve atribuir o valor Montanaà variável playerdiretamente.

Você deve usar a variável playerNumberem sua notação de colchetes
*/