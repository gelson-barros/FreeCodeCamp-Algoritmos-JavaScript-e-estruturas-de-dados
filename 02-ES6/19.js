/*
Escreva funções declarativas concisas com ES6

Ao definir funções dentro de objetos no ES5, temos que usar a palavra-chave da functionseguinte forma:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Com o ES6, você pode remover a functionpalavra - chave e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refatore a função setGeardentro do objeto bicyclepara usar a sintaxe abreviada descrita acima.

*/

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

/*
A expressão de função tradicional não deve ser usada.

setGear deve ser uma função declarativa.

bicycle.setGear(48)deve alterar o gearvalor para 48.
*/