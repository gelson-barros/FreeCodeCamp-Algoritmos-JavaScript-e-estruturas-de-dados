/*
Use Propriedades de Prototype para Reduzir Código Duplicado
Como numLegsprovavelmente terá o mesmo valor para todas as instâncias de Bird, você essencialmente tem uma variável duplicada numLegsdentro de cada Birdinstância.

Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se houver milhões de instâncias. Isso seria um monte de variáveis ​​duplicadas.

A melhor maneira é usar o prototypede Bird. As propriedades no prototypesão compartilhadas entre TODAS as instâncias de Bird. Veja como adicionar numLegsao Bird prototype:
*/

Bird.prototype.numLegs = 2;

// Agora, todas as instâncias de Bird têm a numLegs propriedade.

console.log(duck.numLegs);
console.log(canary.numLegs);

/*
Como todas as instâncias têm automaticamente as propriedades no prototype, pense em a prototypecomo uma "receita" para criar objetos. Observe que prototypefor ducke canaryfaz parte do Birdconstrutor as Bird.prototype. Quase todo objeto em JavaScript tem uma prototypepropriedade que faz parte da função construtora que o criou.

Adicione uma numLegs propriedade ao prototypedeDog
*/

function Dog(name) {
    this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

/*
beagledeve ter uma numLegspropriedade.

beagle.numLegs deve ser um número.

numLegsdeve ser uma prototypepropriedade, não uma propriedade própria.
*/