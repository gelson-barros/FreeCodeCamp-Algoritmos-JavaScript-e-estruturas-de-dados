/*
Iterar sobre todas as propriedades
Agora você viu dois tipos de propriedades: propriedades próprias e prototypepropriedades. As propriedades próprias são definidas diretamente na própria instância do objeto. E as prototypepropriedades são definidas no prototype.
*/
function Bird(name) {
    this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

/*
Veja como você adiciona duckas próprias propriedades de à matriz ownPropse as prototypepropriedades à matriz prototypeProps:
*/

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);

/*
console.log(ownProps)seria exibido ["name"]no console e console.log(prototypeProps)seria exibido ["numLegs"].

Adicione todas as propriedades próprias de beagleao array ownProps. Adicione todas as prototypepropriedades de Dogà matriz prototypeProps.
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

/*
A ownPropsmatriz deve conter apenas name.

A prototypePropsmatriz deve conter apenas numLegs.

Você deve resolver este desafio sem usar o método integrado Object.keys().
*/