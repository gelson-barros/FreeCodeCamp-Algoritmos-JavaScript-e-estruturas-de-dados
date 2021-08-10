/*
Defina o protótipo da criança como uma instância do pai
No desafio anterior, você viu a primeira etapa para herdar o comportamento do supertipo (ou pai) Animal: criar uma nova instância de Animal.

Esse desafio cobre a próxima etapa: definir o prototypedo subtipo (ou filho) —neste caso, Bird—para ser uma instância de Animal.
*/

Bird.prototype = Object.create(Animal.prototype);
/*
Lembre-se de que o prototypeé como a "receita" para criar um objeto. De certa forma, a receita por Birdenquanto inclui todos os principais "ingredientes" de Animal.
*/
let duck = new Bird("Donald");
duck.eat();

/*
duck herda todas Animalas propriedades de, incluindo o eatmétodo.

Modifique o código para que as instâncias sejam Dogherdadas de Animal.
*/

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

/*
Dog.prototype deve ser uma instância de Animal.
*/