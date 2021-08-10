/*
Usando objetos para pesquisasPassado
Os objetos podem ser considerados um armazenamento de chave / valor, como um dicionário. Se você tiver dados tabulares, poderá usar um objeto para pesquisar valores em vez de uma switchinstrução ou uma if/elsecadeia. Isso é mais útil quando você sabe que seus dados de entrada estão limitados a um determinado intervalo.

Aqui está um exemplo de uma pesquisa de alfabeto reverso simples:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
alpha[2]é a string Y, alpha[24]é a string Ce alpha[value]é a string Y.

Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar vale atribuir a string associada à resultvariável.

*/
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

/*
phoneticLookup("alpha") deve ser igual à corda Adams

phoneticLookup("bravo") deve ser igual à corda Boston

phoneticLookup("charlie") deve ser igual à corda Chicago

phoneticLookup("delta") deve ser igual à corda Denver

phoneticLookup("echo") deve ser igual à corda Easy

phoneticLookup("foxtrot") deve ser igual à corda Frank

phoneticLookup("") deve ser igual undefined

Você não deve modificar a returndeclaração

Você não deve usar case, switchou ifdeclarações
*/