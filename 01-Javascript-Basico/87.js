/*
Excluir propriedades de um objeto JavaScriptPassado
Também podemos excluir propriedades de objetos como este:

delete ourDog.bark;
Exemplo:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Após a última linha mostrada acima, ourDogfica assim:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Exclua a tailspropriedade de myDog. Você pode usar a notação de ponto ou colchete.
*/

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

/*
Você deve excluir a propriedade tailsde myDog.

Você não deve modificar a myDogconfiguração.
*/