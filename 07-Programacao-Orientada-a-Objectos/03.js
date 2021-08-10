/*
Criar um método em um objeto
Os objetos podem ter um tipo especial de propriedade, denominado método .

Métodos são propriedades que são funções. Isso adiciona um comportamento diferente a um objeto. Aqui está o duck exemplo com um método:
*/

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () {
        return "The name of this duck is " + duck.name + ".";
    },
};
duck.sayName();

/*
O exemplo adiciona o sayNamemétodo, que é uma função que retorna uma frase com o nome de duck. Observe que o método acessou a namepropriedade na instrução return usando duck.name. O próximo desafio cobrirá outra maneira de fazer isso.

Usando o dogobjeto, dê a ele um método chamado sayLegs. O método deve retornar a fraseThis dog has 4 legs.
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
   return `This dog has ${dog.numLegs} legs.`;
  }
};

dog.sayLegs();
/*
dog.sayLegs() deve ser uma função.

dog.sayLegs() deve retornar a string fornecida - observe que a pontuação e o espaçamento são importantes.
*/