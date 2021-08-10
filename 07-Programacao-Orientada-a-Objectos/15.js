/*
Entenda de onde vem o protótipo de um objeto
Assim como as pessoas herdam genes de seus pais, um objeto herda seus genes prototypediretamente da função construtora que o criou. Por exemplo, aqui o Birdconstrutor cria o duckobjeto:
*/

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");

/*
duckher da seu prototype da Bird função de construtor. Você pode mostrar essa relação com o isPrototypeOfmétodo:
*/

Bird.prototype.isPrototypeOf(duck);

/*
Isso voltaria true.

Use isPrototypeOfpara verificar o prototypede beagle.
*/

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);

/*
Você deve mostrar que Dog.prototype é o prototype de beagle
*/