/*
Use o parâmetro de descanso com parâmetros de função

Para nos ajudar a criar funções mais flexíveis, o ES6 introduz o parâmetro rest para os parâmetros de função. Com o parâmetro rest, você pode criar funções que usam um número variável de argumentos. Esses argumentos são armazenados em uma matriz que pode ser acessada posteriormente de dentro da função.

Confira este código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
O console exibiria as cordas You have passed 3 arguments.e You have passed 4 arguments..

O parâmetro rest elimina a necessidade de verificar a args matriz e nos permite aplicar map(), filter()e reduce() na matriz de parâmetros.

Modifique a função sum usando o parâmetro rest de forma que a função sum seja capaz de receber qualquer número de argumentos e retornar sua soma.
*/

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};

/*
O resultado de sum(0,1,2)deveria ser 3

O resultado de sum(1,2,3,4)deve ser 10

O resultado de sum(5)deve ser 5

O resultado de sum()deve ser 0

sumdeve ser uma função de seta que usa a sintaxe do parâmetro rest ( ...) no argsparâmetro.
*/