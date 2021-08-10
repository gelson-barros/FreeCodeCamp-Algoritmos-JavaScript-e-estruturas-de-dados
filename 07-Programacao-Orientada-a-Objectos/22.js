/*
Substituir métodos herdados
Nas lições anteriores, você aprendeu que um objeto pode herdar seu comportamento (métodos) de outro objeto referenciando seu prototypeobjeto:
*/

ChildObject.prototype = Object.create(ParentObject.prototype);

/*
Em seguida, o ChildObjectrecebeu seus próprios métodos, encadeando-os em seu prototype:
*/

// ChildObject.prototype.methodName = function() {...};

/*
É possível substituir um método herdado. É feito da mesma maneira - adicionando um método para ChildObject.prototypeusar o mesmo nome de método daquele a ser substituído. Aqui está um exemplo de Birdsubstituição do eat()método herdado de Animal:
*/

function Animal() {}
Animal.prototype.eat = function () {
    return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
    return "peck peck peck";
};

/*
Se você tiver uma instância let duck = new Bird();e chamar duck.eat(), é assim que o JavaScript procura o método na prototypecadeia de duck:

1.duck=> Está eat()definido aqui? Não.
2.Bird=> Está eat()definido aqui? => Sim. Execute-o e pare de pesquisar.
3.Animal=> eat()também é definido, mas o JavaScript parou de pesquisar antes de atingir esse nível.
4.Object => JavaScript parou de pesquisar antes de atingir este nível.
Substitua o fly()método por Penguinpara que ele retorne a stringAlas, this is a flightless bird.
*/

function Bird() {}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/*
penguin.fly() deve retornar a string Alas, this is a flightless bird.

O bird.fly()método deve retornar a stringI am flying!
*/