/*
Verifique o construtor de um objeto com instanceof
Sempre que uma função construtora cria um novo objeto, esse objeto é considerado uma instância de seu construtor. JavaScript fornece uma maneira conveniente de verificar isso com o instanceofoperador. instanceofpermite que você compare um objeto a um construtor, retornando trueou com falsebase no fato de o objeto ter sido criado ou não com o construtor. Aqui está um exemplo:
*/
let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
/*
Este instanceofmétodo retornaria true.

Se um objeto for criado sem usar um construtor, instanceof verificará se não é uma instância desse construtor:
*/

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2,
};

canary instanceof Bird;

/*
Este instanceofmétodo retornaria false.

Crie uma nova instância do Houseconstrutor, chamando-o myHousee passando por vários quartos. Em seguida, use instanceofpara verificar se é uma instância de House.
*/


/*
myHouse deve ter um numBedroomsatributo definido como um número.

Você deve verificar se myHouseé uma instância de Houseuso do instanceof operador.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;

/*
myHousedeve ter um numBedroomsatributo definido como um número.

Você deve verificar se myHouseé uma instância de Houseuso do instanceofoperador.
*/