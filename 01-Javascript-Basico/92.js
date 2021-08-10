/*
Acessando matrizes aninhadasPassado
Como vimos nos exemplos anteriores, os objetos podem conter tanto objetos aninhados quanto matrizes aninhadas. Semelhante ao acesso a objetos aninhados, a notação de colchetes de array pode ser encadeada para acessar arrays aninhados.

Aqui está um exemplo de como acessar uma matriz aninhada:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1]seria a string Fluffye ourPets[1].names[0]seria a string Spot.

Usando a notação de ponto e colchete, defina a variável secondTreecomo o segundo item da treeslista do myPlantsobjeto.
*/

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = "";

/*
secondTreedeve ser igual à string pine.

Seu código deve usar notação de ponto e colchete para acessar myPlants.
*/