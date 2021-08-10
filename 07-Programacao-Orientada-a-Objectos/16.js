/*
Entenda a cadeia de protótipos

Todos os objetos em JavaScript (com algumas exceções) têm um prototype. Além disso, o prototype próprio objeto é um objeto.
*/
function Bird(name) {
    this.name = name;
}

typeof Bird.prototype;

/*
Como a prototype é um objeto, a prototype pode ter os seus prototype! Nesse caso, o prototype de Bird.prototype é Object.prototype:
*/
Object.prototype.isPrototypeOf(Bird.prototype);
/*
Como isso é útil? Você pode se lembrar do hasOwnPropertymétodo de um desafio anterior:
*/
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
/*
O hasOwnPropertymétodo é definido em Object.prototype, que pode ser acessado por Bird.prototype, que pode então ser acessado por duck. Este é um exemplo da prototypecadeia. Nesta prototypecadeia, Birdé o supertypepara duck, enquanto ducké o subtype. Objecté um supertypepara ambos Birde duck. Objecté um supertypepara todos os objetos em JavaScript. Portanto, qualquer objeto pode usar o hasOwnPropertymétodo.
Modifique o código para mostrar a cadeia de protótipo correta.

Modifique o código para mostrar a cadeia de protótipo correta.
*/

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
/*
Seu código deve mostrar que Object.prototypeé o protótipo do Dog.prototype
*/
