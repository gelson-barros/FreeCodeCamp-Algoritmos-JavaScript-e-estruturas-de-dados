/*
Use um construtor para criar objetos
Este é o Birdconstrutor do desafio anterior:
*/
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();

/*
NOTA: this dentro do construtor sempre se refere ao objeto que está sendo criado.

Observe que o newoperador é usado ao chamar um construtor. Isso diz ao JavaScript para criar uma nova instância de Birdchamada blueBird. Sem o newoperador, thisdentro do construtor não apontaria para o objeto recém-criado, dando resultados inesperados. Agora blueBirdtem todas as propriedades definidas dentro do Birdconstrutor:
*/
blueBird.name;
blueBird.color;
blueBird.numLegs;
/*
Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:
*/
blueBird.name = "Elvira";
blueBird.name;
/*
Use o Dogconstrutor da última lição para criar uma nova instância de Dog, atribuindo-o a uma variável hound.
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
/*
hound deve ser criado usando o Dog construtor.

Seu código deve usar o newoperador para criar uma instância de Dog.
*/