/*
Lembre-se de definir a propriedade do construtor ao alterar o protótipo
Existe um efeito colateral crucial de configurar manualmente o protótipo para um novo objeto. Apaga a constructor propriedade! Esta propriedade pode ser usada para verificar qual função de construtor criou a instância, mas como a propriedade foi substituída, agora fornece resultados falsos:
*/

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

/*
No fim, essas expressões seria avaliada como false, true, e true.

Para corrigir isso, sempre que um protótipo for definido manualmente para um novo objeto, lembre-se de definir a constructorpropriedade:
*/
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    },
};

/*
Dog.prototypedeve definir a constructorpropriedade.
*/