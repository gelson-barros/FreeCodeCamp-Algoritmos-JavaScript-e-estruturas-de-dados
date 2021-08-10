/*
Aplicar programação funcional para converter strings em URLs de slugs
Os últimos vários desafios cobriram uma série de métodos úteis de array e string que seguem princípios de programação funcional. Também aprendemos sobre reduce, que é um método poderoso usado para reduzir problemas a formas mais simples. De calcular médias a classificação, qualquer operação de matriz pode ser alcançada aplicando-a. Lembre-se disso mape filtersão casos especiais de reduce.

Vamos combinar o que aprendemos para resolver um problema prático.

Muitos sites de gerenciamento de conteúdo (CMS) têm os títulos de uma postagem adicionados a parte da URL para fins simples de bookmarking. Por exemplo, se você escrever uma postagem no Medium com o título Stop Using Reduce, é provável que o URL tenha alguma forma da string do título ( .../stop-using-reduce). Você já deve ter notado isso no site freeCodeCamp.

Preencha a urlSlugfunção para que ela converta uma string titlee retorne a versão hifenizada para o URL. Você pode usar qualquer um dos métodos abordados nesta seção e não use replace. Aqui estão os requisitos:

A entrada é uma string com espaços e palavras com letras maiúsculas e minúsculas

A saída é uma string com os espaços entre as palavras substituídos por um hífen ( -)

A saída deve ser toda em letras minúsculas

A saída não deve ter espaços
*/

// Only change code below this line
function urlSlug(title) {
  return title.split(' ').filter(substr => substr !== '').map(str => str.toLowerCase()).join('-')

}
// Only change code above this line
// function urlSlug(title) {
//     return title.toLowerCase().trim().split(/\s+/).join("-");
// }

/*
Seu código não deve usar o replacemétodo para este desafio.

urlSlug("Winter Is Coming")deve retornar a string winter-is-coming.

urlSlug(" Winter Is  Coming")deve retornar a string winter-is-coming.

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")deve retornar a string a-mind-needs-books-like-a-sword-needs-a-whetstone.

urlSlug("Hold The Door")deve retornar a string hold-the-door.
*/