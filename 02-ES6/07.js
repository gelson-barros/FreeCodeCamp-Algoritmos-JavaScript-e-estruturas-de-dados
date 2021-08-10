/*
Escrever funções de seta com parâmetros

Assim como uma função regular, você pode passar argumentos para uma função de seta.

const doubler = (item) => item * 2;
doubler(4);
doubler(4)retornaria o valor 8.

Se uma função de seta tiver um único parâmetro, os parênteses que envolvem o parâmetro podem ser omitidos.

const doubler = item => item * 2;
É possível passar mais de um argumento para uma função de seta.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2)retornaria o valor 8.

Reescreva a myConcatfunção que anexa o conteúdo de arr2a arr1para que a função use a sintaxe da função de seta.
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/*
Você deve substituir a varpalavra - chave.

myConcatdeve ser uma variável constante (usando const).

myConcat deve ser uma função de seta com dois parâmetros

myConcat()deve retornar [1, 2, 3, 4, 5].

A functionpalavra-chave não deve ser usada.
*/