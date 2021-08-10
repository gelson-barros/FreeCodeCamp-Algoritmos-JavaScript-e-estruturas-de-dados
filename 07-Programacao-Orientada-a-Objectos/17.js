/*
Use a herança para não se repetir
Existe um princípio de programação chamado Don't Repeat Yourself (DRY) . O motivo pelo qual o código repetido é um problema é porque qualquer alteração requer a correção do código em vários lugares. Isso geralmente significa mais trabalho para os programadores e mais espaço para erros.

Observe no exemplo abaixo que o describemétodo é compartilhado por Birde Dog:
*/

Bird.prototype = {
    constructor: Bird,
    describe: function () {
        console.log("My name is " + this.name);
    },
};

Dog.prototype = {
    constructor: Dog,
    describe: function () {
        console.log("My name is " + this.name);
    },
};
/*
O describemétodo é repetido em dois lugares. O código pode ser editado para seguir o princípio DRY criando um supertype(ou pai) chamado Animal:
*/
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is " + this.name);
    },
};

/*
Como Animal inclui o describe método, você pode removê-lo de Birde Dog:
*/

Bird.prototype = {
    constructor: Bird,
};

Dog.prototype = {
    constructor: Dog,
};
/*
O eat método é repetido em ambos Cate Bear. Edite o código no espírito de DRY movendo o eatmétodo para o Animal supertype.
*/

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
};

/*
Animal.prototypedeve ter a eatpropriedade.

Bear.prototypenão deve ter a eatpropriedade.

Cat.prototypenão deve ter a eatpropriedade.
*/