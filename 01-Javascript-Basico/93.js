/*
Coleção de discosPassado
Você recebe um objeto literal que representa uma parte de sua coleção de álbuns musicais. Cada álbum possui um número de identificação exclusivo como chave e várias outras propriedades. Nem todos os álbuns possuem informações completas.

Você começa com uma updateRecordsfunção que leva um objeto literal,, recordscontendo a coleção de álbum musical, an id, a prop(como artistou tracks) e a value. Conclua a função usando as regras abaixo para modificar o objeto passado para a função.

- Sua função deve sempre retornar todo o objeto da coleção de registros.
- Se propnão for trackse nem valuefor uma string vazia, atualize ou defina o do álbum propcomo value.
- Se propfor, tracksmas o álbum não tiver uma trackspropriedade, crie um array vazio e adicione valuea ele.
- Se propfor trackse valuenão for uma string vazia, adicione valueao final da tracksmatriz existente do - álbum .
- Se valuefor uma string vazia, exclua a proppropriedade fornecida do álbum.
Nota: Uma cópia do recordCollectionobjeto é usada para os testes.
*/

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/*
Depois updateRecords(recordCollection, 5439, "artist", "ABBA"), artistdeve ser a cordaABBA

Depois updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracksdeve ter a string Take a Chance on Mecomo último elemento.

Depois updateRecords(recordCollection, 2548, "artist", ""), artistnão deve ser definido

Depois updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracksdeve ter a string Addicted to Lovecomo último elemento.

Depois updateRecords(recordCollection, 2468, "tracks", "Free"), tracksdeve ter a string 1999como primeiro elemento.

Depois updateRecords(recordCollection, 2548, "tracks", ""), tracksnão deve ser definido

Depois updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitledeve ser a cordaRiptide
*/