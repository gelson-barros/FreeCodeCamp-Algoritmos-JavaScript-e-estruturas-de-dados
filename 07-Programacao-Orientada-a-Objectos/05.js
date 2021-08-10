/*
Definir uma função de construtor
Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo objeto. Pense neles como um projeto para a criação de novos objetos.

Aqui está um exemplo de um construtor:
*/
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

/*
Este construtor define um Bird objecto com propriedades name, color e numLegs conjunto de Albert, blue, e dois, respectivamente. Os construtores seguem algumas convenções:

Os construtores são definidos com um nome em maiúscula para distingui-los de outras funções que não o são constructors.
Os construtores usam a palavra this- chave para definir as propriedades do objeto que criarão. Dentro do construtor, this refere-se ao novo objeto que criará.
Os construtores definem propriedades e comportamentos em vez de retornar um valor como outras funções podem fazer.
Crie um construtor Dog,, com propriedades name, colore numLegsque são definidas como uma string, uma string e um número, respectivamente.
*/

function Dog(){
  this.name = 'Pó Ferreira',
  this.color = 'Brown',
  this.numLegs = 4
}

/*
Dogdeve ter uma namepropriedade definida para uma string.

Dogdeve ter uma colorpropriedade definida para uma string.

Dogdeve ter uma numLegspropriedade definida como um número.
*/