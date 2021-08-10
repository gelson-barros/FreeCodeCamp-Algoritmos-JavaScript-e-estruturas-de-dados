/*
Use a palavra-chave delete para remover propriedades do objeto

Agora você sabe o que são objetos e suas características e vantagens básicas. Resumindo, eles são armazenamentos de valores-chave que fornecem uma maneira flexível e intuitiva de estruturar os dados e fornecem um tempo de pesquisa muito rápido. No restante desses desafios, descreveremos várias operações comuns que você pode executar em objetos para que se sinta confortável ao aplicar essas estruturas de dados úteis em seus programas.

Em desafios anteriores, adicionamos e modificamos os pares de valores-chave de um objeto. Aqui, veremos como podemos remover um par de valores-chave de um objeto.

Vamos revisitar nosso foodsexemplo de objeto uma última vez. Se quisermos remover a appleschave, podemos removê-la usando a deletepalavra - chave como esta:

delete foods.apples;
Utilizar a palavra-chave DELETE para remover o oranges, plumse strawberriesas chaves do foodsobjeto.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

// Only change code below this line
delete foods.strawberries;
delete foods.oranges;
delete foods.plums;
// Only change code above this line

console.log(foods);


/*
O foodsobjeto deve ter apenas três teclas: apples, grapes, e bananas.

A oranges, plums, e strawberriesas chaves devem ser removidos usando delete.
*/