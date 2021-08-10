/*
Herdar comportamentos de um supertipo
No desafio anterior, você criou um supertypechamado Animalque definiu comportamentos compartilhados por todos os animais:
*/
function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};
/*
Este e o próximo desafio abordarão como reutilizar os métodos de Animaldentro Birde Dogsem defini-los novamente. Ele usa uma técnica chamada herança. Este desafio cobre a primeira etapa: fazer uma instância de supertype(ou pai). Você já conhece uma maneira de criar uma instância de Animaluso do newoperador:
*/
let animal = new Animal();
/*
Existem algumas desvantagens ao usar essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:
*/
let animal = Object.create(Animal.prototype);
/*
Object.create(obj)cria um novo objeto e define objcomo o novo objeto prototype. Lembre-se de que o prototypeé como a "receita" para criar um objeto. Ao definir o prototypede animalcomo o prototypede Animal, você está efetivamente dando à animalinstância a mesma "receita" que qualquer outra instância de Animal.
*/
animal.eat();
animal instanceof Animal;
/*
O instanceofmétodo aqui retornaria true.

Use Object.createpara fazer duas instâncias de Animalnamed ducke beagle.
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

/*
A duckvariável deve ser definida.

A beaglevariável deve ser definida.

A duckvariável deve ser inicializada com Object.create.

A beaglevariável deve ser inicializada com Object.create.

duckdeve ter um prototypede Animal.

beagledeve ter um prototypede Animal.
*/