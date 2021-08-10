/*
Compreender as próprias propriedades
No exemplo a seguir, o Birdconstrutor define duas propriedades: namee numLegs:
*/
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

/*
namee numLegssão chamados de propriedades próprias , porque são definidos diretamente no objeto de instância. Isso significa que ducke canarycada um tem a sua própria cópia separada destas propriedades. Na verdade, cada instância de Birdterá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades de duckà matriz ownProps:
*/

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

/*
O console exibiria o valor ["name", "numLegs"].

Adicione as próprias propriedades de canaryao array ownProps.
*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);

/*
ownPropsdeve incluir os valores numLegse name.

Você deve resolver este desafio sem usar o método integrado Object.keys().

Você deve resolver este desafio sem codificar o ownPropsarray.
*/