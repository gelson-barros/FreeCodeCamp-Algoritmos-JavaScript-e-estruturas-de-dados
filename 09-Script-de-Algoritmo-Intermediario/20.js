/*
Faça uma pessoa
Preencha o construtor de objeto com os seguintes métodos:

getFirstName();
getLastName();
getFullName();
setFirstName(first);
setLastName(last);
setFullName(firstAndLast);

Execute os testes para ver a saída esperada para cada método. Os métodos que recebem um argumento devem aceitar apenas um argumento e deve ser uma string. Esses métodos devem ser os únicos meios disponíveis de interação com o objeto.
*/
// var Person = function (firstAndLast) {
//     // Only change code below this line
//     // Complete the method below and implement the others similarly
//     this.getFullName = function () {
//         return "";
//     };
//     return firstAndLast;
// };

var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};

var bob = new Person("Bob Ross");
bob.getFullName();


console.log(Object.keys(bob)) // deve retornar 6.

console.log(bob instanceof Person); // deve retornar true.

console.log(bob.firstName); // deve retornar undefined.

console.log(bob.lastName); // deve retornar undefined.

console.log(bob.getFirstName()) // deve retornar a string Bob.

console.log(bob.getLastName()); // deve retornar a string Ross.

console.log(bob.getFullName()) // deve retornar a string Bob Ross.

console.log(bob.getFullName()) // deve retornar a string Haskell Ross depois bob.setFirstName("Haskell").

console.log(bob.getFullName()) // deve retornar a string Haskell Curry depois bob.setLastName("Curry").

console.log(bob.getFullName()) // deve retornar a string Haskell Curry depois bob.setFullName("Haskell Curry").

console.log(bob.getFirstName()) // deve retornar a string Haskelldepois bob.setFullName("Haskell Curry").

console.log(bob.getLastName()) // deve retornar a string Currydepois bob.setFullName("Haskell Curry").
