/*
Declare uma variável somente leitura com a palavra-chave const
A palavra let- chave não é a única maneira nova de declarar variáveis. No ES6, você também pode declarar variáveis ​​usando a constpalavra - chave.

consttem todos os recursos incríveis que letpossui, com o bônus adicional de que as variáveis ​​declaradas usando constsão somente leitura. Eles são um valor constante, o que significa que, uma vez atribuída a uma variável const, ela não pode ser reatribuída.

const FAV_PET = "Cats";
FAV_PET = "Dogs";
O console exibirá um erro devido à reatribuição do valor de FAV_PET.

Como você pode ver, tentar reatribuir uma variável declarada com constgerará um erro. Você deve sempre nomear variáveis ​​que não deseja reatribuir usando a constpalavra - chave. Isso ajuda quando você tenta acidentalmente reatribuir uma variável que deve permanecer constante. Uma prática comum ao nomear constantes é usar todas as letras maiúsculas, com palavras separadas por um sublinhado.

Observação: é comum para desenvolvedores usar identificadores de variáveis ​​em maiúsculas para valores imutáveis ​​e minúsculas ou camelCase para valores mutáveis ​​(objetos e matrizes). Em um desafio posterior, você verá um exemplo de um identificador de variável em minúsculas sendo usado para um array.

Altere o código para que todas as variáveis ​​sejam declaradas usando letou const. Use letquando quiser que a variável mude e constquando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com constpara estar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas.
*/

function printManyTimes(str) {
    // Only change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // Only change code above this line
}
printManyTimes("freeCodeCamp");

/*
var não deve existir em seu código.

Passed
SENTENCEdeve ser uma variável constante declarada com const.

Passed
ideve ser declarado com let.

Passed
console.logdeve ser alterado para imprimir a SENTENCEvariável.
*/