/*
Testando objetos para propriedadesPassado
Às vezes é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o .hasOwnProperty(propname)método de objetos para determinar se aquele objeto tem o nome de propriedade fornecido. .hasOwnProperty()retorna trueou falsese o imóvel foi encontrado ou não.

Exemplo

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
O primeiro hasOwnPropertyretorna true, enquanto o segundo retorna false.
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    return "Change Me!";
    // Only change code above this line
}

/*
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")deve retornar a string pony.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")deve retornar a string kitten.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")deve retornar a string Not Found.

checkObj({city: "Seattle"}, "city")deve retornar a string Seattle.

checkObj({city: "Seattle"}, "district")deve retornar a string Not Found.

checkObj({pet: "kitten", bed: "sleigh"}, "gift")deve retornar a string Not Found.
*/