/*
Mudar o protótipo para um novo objeto
Até agora, você tem adicionado propriedades ao prototype:
*/

Bird.prototype.numLegs = 2;

// Isso se torna tedioso depois de mais do que algumas propriedades.

Bird.prototype.eat = function () {
    console.log("nom nom nom");
};

Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
};

/*
Uma maneira mais eficiente é definir o prototypecomo um novo objeto que já contém as propriedades. Dessa forma, as propriedades são adicionadas todas de uma vez:
*/

Bird.prototype = {
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    },
};

/*
Adicione a propriedade numLegse os dois métodos eat()e describe()ao prototypede Dogdefinindo o prototypecomo um novo objeto.
*/