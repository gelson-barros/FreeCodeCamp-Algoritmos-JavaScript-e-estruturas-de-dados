/*
Use um IIFE para criar um módulo
Uma expressão de função imediatamente chamada (IIFE) é freqüentemente usada para agrupar funcionalidades relacionadas em um único objeto ou módulo . Por exemplo, um desafio anterior definiu dois mixins:
*/

function glideMixin(obj) {
    obj.glide = function () {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
}
/*
Podemos agrupar esses mixins em um módulo da seguinte maneira:
*/

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        },
    };
})();

/*
Observe que você tem uma expressão de função imediatamente chamada (IIFE) que retorna um objeto motionModule. Este objeto retornado contém todos os comportamentos mixin como propriedades do objeto. A vantagem do padrão de módulo é que todos os comportamentos de movimento podem ser empacotados em um único objeto que pode então ser usado por outras partes do seu código. Aqui está um exemplo de uso:
*/
motionModule.glideMixin(duck);
duck.glide();

/*
Crie um módulo chamado funModulepara envolver os dois mixins isCuteMixine singMixin. funModuledeve retornar um objeto.
*/

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        },
    };
})();




/*
funModule deve ser definido e retornar um objeto.

funModule.isCuteMixin deve acessar uma função.

funModule.singMixin deve acessar uma função.
*/