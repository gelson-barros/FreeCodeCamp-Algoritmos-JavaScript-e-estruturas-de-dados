/*
Adicionar pares de valores-chave a objetos JavaScript
Basicamente, os objetos são apenas coleções de pares de valores-chave . Em outras palavras, eles são pedaços de dados ( valores ) mapeados para identificadores exclusivos chamados propriedades ( chaves ). Dê uma olhada em um exemplo:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
O código acima define um objeto de personagem de videogame Tekken chamado tekkenCharacter. Ele possui três propriedades, cada uma delas mapeada para um valor específico. Se você deseja adicionar uma propriedade adicional, como "origem", isso pode ser feito atribuindo originao objeto:

tekkenCharacter.origin = 'South Korea';
Isso usa a notação de ponto. Se você fosse observar o tekkenCharacterobjeto, agora ele incluirá a originpropriedade. Hwoarang também tinha cabelos laranja distintos. Você pode adicionar essa propriedade com a notação de colchetes fazendo:

tekkenCharacter['hair color'] = 'dyed orange';
A notação de colchetes é necessária se sua propriedade tiver um espaço ou se você quiser usar uma variável para nomear a propriedade. No caso acima, a propriedade é colocada entre aspas para denotá-la como uma string e será adicionada exatamente como mostrado. Sem aspas, ela será avaliada como uma variável e o nome da propriedade será o valor da variável. Aqui está um exemplo com uma variável:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
Depois de adicionar todos os exemplos, o objeto ficará assim:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
Um foodsobjeto foi criado com três entradas. Usando a sintaxe de sua escolha, adicione mais três entradas a ela: bananascom um valor de 13, grapescom um valor de 35e strawberriescom um valor de 27.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
};

// Only change code below this line
(foods.bananas = 13),
    (foods.grapes = 35),
    (foods.strawberries = 27),
    // Only change code above this line

    console.log(foods);

/*
foods deve ser um objeto.

O foodsobjeto deve ter uma chave bananascom um valor de 13.

O foodsobjeto deve ter uma chave grapescom um valor de 35.

O foodsobjeto deve ter uma chave strawberriescom um valor de 27.

Os pares de valores-chave devem ser definidos usando a notação de ponto ou colchete.
*/