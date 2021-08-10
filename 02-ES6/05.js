/*
Impedir mutação de objeto

Como visto no desafio anterior, a constdeclaração por si só não protege realmente seus dados de mutação. Para garantir que seus dados não mudem, o JavaScript fornece uma função Object.freezepara evitar a mutação de dados.

Depois que o objeto é congelado, você não pode mais adicionar, atualizar ou excluir propriedades dele. Qualquer tentativa de mudar o objeto será rejeitada sem erro.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
As atribuições obj.reviewe obj.newPropresultarão em erros e o console exibirá o valor { name: "FreeCodeCamp", review: "Awesome" }.

Neste desafio, você vai usar Object.freezepara evitar que as constantes matemáticas mudem. Você precisa congelar o MATH_CONSTANTSobjeto para que ninguém possa alterar o valor PI, adicionar ou excluir propriedades.
*/


/*
Você não deve substituir a constpalavra - chave.

MATH_CONSTANTSdeve ser uma variável constante (usando const).

Você não deve alterar a declaração original de MATH_CONSTANTS.

PIdeve ser igual 3.14.
*/
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    MATH_CONSTANTS;
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/*
Você não deve substituir a constpalavra - chave.

MATH_CONSTANTSdeve ser uma variável constante (usando const).

Você não deve alterar a declaração original de MATH_CONSTANTS.

PIdeve ser igual 3.14.
*/