/*
Redefinir uma propriedade de construtor herdada
Quando um objeto herda seu prototypede outro objeto, ele também herda a propriedade constructor do supertipo.

Aqui está um exemplo:
*/
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor;
/*
Mas ducke todas as instâncias de Birddevem mostrar que foram construídos por Birde não Animal. Para fazer isso, você pode definir manualmente a propriedade constructor de Birdpara o Birdobjeto:
*/
Bird.prototype.constructor = Bird;
duck.constructor;
/*
Corrija o código assim duck.constructore beagle.constructorretorne seus respectivos construtores.
*/

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

/*
Bird.prototypedeve ser uma instância de Animal.

duck.constructordeve retornar Bird.

Dog.prototypedeve ser uma instância de Animal.

beagle.constructordeve retornar Dog.
*/