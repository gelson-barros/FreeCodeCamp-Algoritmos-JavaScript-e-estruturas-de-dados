/*
Acessando Propriedades de Objetos com Notação de PontosPassado
Existem duas maneiras de acessar as propriedades de um objeto: notação de ponto ( .) e notação de colchetes ( []), semelhante a uma matriz.

A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar com antecedência.

Aqui está um exemplo de como usar a notação de ponto ( .) para ler a propriedade de um objeto:

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
prop1valteria um valor da string val1e prop2valteria um valor da string val2.

Leia os valores de propriedade de testObjusar a notação de ponto. Defina a variável hatValueigual à propriedade do objeto hate defina a variável shirtValueigual à propriedade do objeto shirt.
*/

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line

/*
hatValue deve ser uma string

O valor de hatValuedeve ser a stringballcap

shirtValue deve ser uma string

O valor de shirtValuedeve ser a stringjersey

Você deve usar a notação de ponto duas vezes
*/