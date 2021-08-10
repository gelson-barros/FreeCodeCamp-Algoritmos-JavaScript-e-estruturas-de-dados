/*
Adicionar métodos após herança
Uma função construtora que herda seu prototypeobjeto de uma função construtora de supertipo ainda pode ter seus próprios métodos, além dos métodos herdados.

Por exemplo, Birdé um construtor que herda seu prototypede Animal:
*/
function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

/*
Além do que é herdado Animal, você deseja adicionar um comportamento exclusivo aos Birdobjetos. Aqui, Birdobterá uma fly()função. As funções são adicionadas Bird's prototypeda mesma forma que qualquer função de construtor:
*/

Bird.prototype.fly = function () {
    console.log("I'm flying!");
};

/*
Agora, as instâncias de Birdterão os métodos eat()e fly():
*/

let duck = new Bird();
duck.eat();
duck.fly();

/*
duck.eat()exibiria a string nom nom nomno console e duck.fly()exibiria a string I'm flying!.

Adicionar todo o código necessário para as Dogherda objeto de Animaleo Dog's prototypeconstrutor está definido para Dog. Em seguida, adicione um bark()método para o Dogobjeto de modo que beaglepode tanto eat()e bark(). O bark()método deve ser impresso Woof!no console.
*/

function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();

/*
Animal não deve responder ao bark() método.

Dog deve herdar o eat()método de Animal.

O Dog protótipo deve ter um bark() método.

beagle deve ser um instanceof Animal.

O construtor de beagle deve ser definido como Dog.

beagle.eat() deve registrar a string nom nom nom

beagle.bark() deve registrar a string Woof!
*/