/*
Acessar nomes de propriedades com notação de colchetes

No primeiro desafio do objeto mencionamos o uso da notação de colchetes como uma forma de acessar os valores das propriedades usando a avaliação de uma variável. Por exemplo, imagine que nosso foodsobjeto está sendo usado em um programa para uma caixa registradora de supermercado. Temos alguma função que define o selectedFoode queremos verificar nosso foodsobjeto para a presença desse alimento. Isso pode ser parecido com:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
Este código avaliará o valor armazenado na selectedFoodvariável e retornará o valor daquela chave no foodsobjeto, ou undefinedse não estiver presente. A notação de colchetes é muito útil porque às vezes as propriedades do objeto não são conhecidas antes do tempo de execução ou precisamos acessá-las de uma maneira mais dinâmica.

Definimos uma função checkInventory,, que recebe um item digitalizado como um argumento. Retorna o valor atual da scannedItemchave no foodsobjeto. Você pode presumir que apenas chaves válidas serão fornecidas como um argumento para checkInventory.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
}

console.log(checkInventory("apples"));

/*
checkInventory deve ser uma função.

O foodsobjeto deve ter apenas os seguintes pares chave-valor: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.

checkInventory("apples")deve retornar 25.

checkInventory("bananas")deve retornar 13.

checkInventory("strawberries")deve retornar 27.
*/