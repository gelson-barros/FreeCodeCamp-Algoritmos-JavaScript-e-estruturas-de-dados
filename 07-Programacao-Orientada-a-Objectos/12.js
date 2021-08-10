/*
Compreenda a propriedade do construtor
Há uma constructor propriedade especial localizada nas instâncias do objeto duck e beag leque foi criada nos desafios anteriores:
*/

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);

/*
Ambas as console.logchamadas seriam exibidas trueno console.

Observe que a constructorpropriedade é uma referência à função construtora que criou a instância. A vantagem da constructorpropriedade é que é possível verificar essa propriedade para descobrir que tipo de objeto ela é. Aqui está um exemplo de como isso pode ser usado:
*/

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

/*
Observação: como a constructorpropriedade pode ser substituída (o que será abordado nos próximos dois desafios), geralmente é melhor usar o instanceofmétodo para verificar o tipo de um objeto.

Escreva uma joinDogFraternityfunção que receba um candidateparâmetro e, usando a constructorpropriedade, retorne truese o candidato for a Dog, caso contrário, retorne false.
*/

function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
let beagle = new Dog();
joinDogFraternity(beagle);

/*
joinDogFraternity deve ser definido como uma função.

joinDogFraternitydeve retornar truese candidatefor uma instância de Dog.

joinDogFraternitydeve usar a constructorpropriedade.
*/