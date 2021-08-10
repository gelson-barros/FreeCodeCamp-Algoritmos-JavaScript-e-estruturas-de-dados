/*
Crie strings usando literais de modelo

Um novo recurso do ES6 é o literal de modelo . Este é um tipo especial de string que facilita a criação de strings complexas.

Literais de modelo permitem criar strings de várias linhas e usar recursos de interpolação de strings para criar strings.

Considere o código abaixo:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
O console exibirá as strings Hello, my name is Zodiac Hasbro!e I am 56 years old..

Muitas coisas aconteceram lá. Em primeiro lugar, o exemplo usa crases ( `), não aspas ( 'ou "), para envolver a string. Em segundo lugar, observe que a string é multilinha, tanto no código quanto na saída. Isso economiza a inserção \ndentro de strings. A ${variable}sintaxe usada acima é um espaço reservado. Basicamente, você não precisará mais usar concatenação com o +operador. Para adicionar variáveis ​​a strings, você apenas elimina a variável em uma string de modelo e envolve-a com ${e }. Da mesma forma, você pode incluir outras expressões em seu literal de string, por exemplo ${a + b}. Esta nova maneira de criar strings oferece mais flexibilidade para criar strings robustas.

Use a sintaxe literal do modelo com crases para criar uma matriz de listrings de elemento de lista ( ). O texto de cada elemento da lista deve ser um dos elementos do array da failurepropriedade no resultobjeto e ter um classatributo com o valor text-warning. A makeListfunção deve retornar a matriz de strings do item da lista.

Use um método iterador (qualquer tipo de loop) para obter a saída desejada (mostrado abaixo).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

/*
failuresListdeve ser uma matriz contendo result failuremensagens.

failuresList deve ser igual à saída especificada.

Devem ser usadas strings de modelo e interpolação de expressão.

Um iterador deve ser usado.
*/