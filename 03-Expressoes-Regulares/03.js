/*
Combine uma string literal com diferentes possibilidades

Usando expressões regulares como /coding/, você pode procurar o padrão coding em outra string.

Isso é poderoso para pesquisar strings únicas, mas é limitado a apenas um padrão. Você pode procurar por vários padrões usando o alternation ou OR operador: |.

Este operador corresponde aos padrões antes ou depois dele. Por exemplo, se você quiser corresponder às strings yesou no, a regex que você deseja é /yes|no/.

Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais OR operadores separando-os, como /yes|no|maybe/.

Complete a regex petRegexpara coincidir com os animais de estimação dog, cat, bird, ou fish.
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

/*
Seu regex petRegex deve retornar true para a string John has a pet dog.

Seu regex petRegexdeve retornar false para a string Emma has a pet rock.

Seu regex petRegexdeve retornar true para a string Emma has a pet bird.

Seu regex petRegexdeve retornar truepara a stringLiz has a pet cat.

Seu regex petRegexdeve retornar falsepara a string Kara has a pet dolphin.

Seu regex petRegexdeve retornar truepara a string Alice has a pet fishAlice has a pet fish.

Seu regex petRegexdeve retornar falsepara a string Jimmy has a pet computer.
*/