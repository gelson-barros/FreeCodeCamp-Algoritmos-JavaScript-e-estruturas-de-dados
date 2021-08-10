/*
Explore as diferenças entre as palavras-chave var e letPassado
Um dos maiores problemas com a declaração de variáveis ​​com a varpalavra-chave é que você pode sobrescrever as declarações de variáveis ​​sem erros.

var camper = 'James';
var camper = 'David';
console.log(camper);
Aqui, o console exibirá a string David.

Como você pode ver no código acima, a campervariável é originalmente declarada como Jamese, em seguida, substituída por ser David. Em um aplicativo pequeno, você pode não se deparar com esse tipo de problema, mas quando seu código ficar maior, você pode substituir acidentalmente uma variável que não pretendia substituir. Como esse comportamento não gera um erro, a pesquisa e a correção de bugs tornam-se mais difíceis.
Uma nova palavra-chave chamada letfoi introduzida no ES6 para resolver este problema potencial com a varpalavra - chave. Se você substituísse varpor letnas declarações de variáveis ​​do código acima, o resultado seria um erro.

let camper = 'James';
let camper = 'David';
Este erro pode ser visto no console do seu navegador. Portanto var, ao contrário , ao usar let, uma variável com o mesmo nome só pode ser declarada uma vez. Observe o "use strict". Isso ativa o Modo estrito, que detecta erros de codificação comuns e ações "inseguras". Por exemplo:

"use strict";
x = 3.14;
Isso exibirá um erro que x is not defined.

Atualize o código para que ele use apenas a letpalavra - chave.
*/
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();
/*
var não deve existir no código.

catNamedeve ser a string Oliver.

quote deve ser a corda Oliver says Meow!
*/