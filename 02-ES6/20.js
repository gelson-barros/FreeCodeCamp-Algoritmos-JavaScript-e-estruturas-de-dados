/*
Use a sintaxe de classe para definir uma função de construtor

ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class .

Deve-se notar que a classsintaxe é apenas sintaxe, e não uma implementação completa baseada em classe de um paradigma orientado a objetos, ao contrário de linguagens como Java, Python, Ruby, etc.

No ES5, geralmente definimos uma constructorfunção e usamos a newpalavra-chave para instanciar um objeto.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
A classsintaxe simplesmente substitui a constructorcriação da função:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
Deve-se notar que a classpalavra - chave declara uma nova função, à qual um construtor é adicionado. Este construtor é invocado quando newé chamado para criar um novo objeto.

Nota: UpperCamelCase deve ser usado por convenção para nomes de classe ES6, como SpaceShuttleusado acima.

O constructormétodo é um método especial para criar e inicializar um objeto criado com uma classe. Você aprenderá mais sobre isso na seção Programação Orientada a Objetos da Certificação de Algoritmos e Estruturas de Dados JavaScript.

Use a classpalavra - chave e escreva um constructorpara criar a Vegetableclasse.

A Vegetableclasse permite que você crie um objeto vegetal com uma propriedade nameque é passada para o constructor.
*/

// Only change code below this line
class Vegetable {
  constructor(veget){
    this.name = veget;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

/*
Vegetabledeve ser um classcom um constructormétodo definido .

A classpalavra-chave deve ser usada.

Vegetable deve poder ser instanciado.

carrot.namedeve retornar carrot.
*/