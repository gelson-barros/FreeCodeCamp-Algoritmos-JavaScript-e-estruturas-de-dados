/*
Escopo e funções globais

Em JavaScript, o escopo se refere à visibilidade das variáveis. Variáveis ​​que são definidas fora de um bloco de função têm escopo global . Isso significa que eles podem ser vistos em qualquer lugar em seu código JavaScript.

Variáveis ​​que são declaradas sem a var palavra - chave são criadas automaticamente no globalescopo. Isso pode criar consequências indesejadas em outras partes do código ou ao executar uma função novamente. Você sempre deve declarar suas variáveis ​​com var.

Usando var, declare uma variável global nomea da myGlobal fora de qualquer função. Inicialize-o com um valor de 10.

Dentro da função fun1, atribua 5 a oopsGlobal sem usar a var palavra - chave.
*/

// Declare the myGlobal variable below this line
var myGlobal = 10;
var oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*
myGlobal deve ser definido

myGlobal deve ter um valor de 10

myGlobal deve ser declarado usando a var palavra - chave

oopsGlobal deve ser uma variável global e ter um valor de 5
*/