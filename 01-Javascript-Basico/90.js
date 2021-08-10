/*
Manipulando objetos complexosPassado
Às vezes, você pode querer armazenar dados em uma estrutura de dados flexível . Um objeto JavaScript é uma maneira de lidar com dados flexíveis. Eles permitem combinações arbitrárias de strings , números , booleanos , matrizes , funções e objetos .

Aqui está um exemplo de uma estrutura de dados complexa:

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Este é um array que contém um objeto dentro. O objeto contém várias partes de metadados sobre um álbum. Ele também tem uma formatsmatriz aninhada . Se quiser adicionar mais registros de álbum, você pode fazer isso adicionando registros à matriz de nível superior. Os objetos contêm dados em uma propriedade, que tem um formato de valor-chave. No exemplo acima, "artist": "Daft Punk"é uma propriedade que possui uma chave de artiste um valor de Daft Punk. JavaScript Object Notation ou JSONé um formato de intercâmbio de dados relacionado usado para armazenar dados.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Nota: Você precisará colocar uma vírgula após cada objeto na matriz, a menos que seja o último objeto na matriz.

Adicione um novo álbum ao myMusicarray. Adicione artiste titlestrings, release_yearnúmero e uma formatsmatriz de strings.
*/

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

/*
myMusic deve ser um array

myMusic deve ter pelo menos dois elementos

Os elementos da myMusicmatriz devem ser objetos

Seu objeto em myMusicdeve ter pelo menos 4 propriedades

Seu objeto em myMusicdeve conter a propriedade artistque é uma string

Seu objeto em myMusicdeve conter a propriedade titleque é uma string

Seu objeto em myMusicdeve conter a propriedade release_yearque é um número

Seu objeto em myMusicdeve conter uma formatspropriedade que é um array

formats deve ser uma matriz de strings com pelo menos dois elementos
*/