/*
Use um Mixin para adicionar comportamento comum entre objetos não relacionados
Como você viu, o comportamento é compartilhado por meio de herança. No entanto, há casos em que a herança não é a melhor solução. A herança não funciona bem para objetos não relacionados como Birde Airplane. Ambos podem voar, mas a Birdnão é um tipo de Airplanee vice-versa.

Para objetos não relacionados, é melhor usar mixins . Um mixin permite que outros objetos usem uma coleção de funções.
*/

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
};

/*
O flyMixinpega qualquer objeto e dá a ele o flymétodo.
*/

let bird = {
    name: "Donald",
    numLegs: 2,
};

let plane = {
    model: "777",
    numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);

/*
Aqui birde planesão passados ​​para flyMixin, que atribui a flyfunção a cada objeto. Agora birde planeambos podem voar:
*/

bird.fly();
plane.fly();

/*
O console exibiria a string Flying, wooosh!duas vezes, uma para cada .fly() chamada.

Observe como o mixin permite que o mesmo flymétodo seja reutilizado por objetos não relacionados birde plane.

Crie um mixin chamado glideMixinque defina um método chamado glide. Em seguida, use o glideMixinpara dar ambos birde boata capacidade de planar.

*/

let bird = {
    name: "Donald",
    numLegs: 2,
};

let boat = {
    name: "Warrior",
    type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Flying, wooosh!");
    };
};

glideMixin(bird);
glideMixin(boat);



/*
Seu código deve declarar uma glideMixinvariável que é uma função.

Seu código deve usar glideMixinno birdobjeto para fornecer o glidemétodo.

Seu código deve usar glideMixinno boatobjeto para fornecer o glidemétodo.
*/