/*
Definir parâmetros padrão para suas funções

Para nos ajudar a criar funções mais flexíveis, o ES6 apresenta parâmetros padrão para funções.

Confira este código:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
O console exibirá as strings Hello Johne Hello Anonymous.

O parâmetro padrão entra em ação quando o argumento não é especificado (é indefinido). Como você pode ver no exemplo acima, o parâmetro namereceberá seu valor padrão Anonymousquando você não fornecer um valor para o parâmetro. Você pode adicionar valores padrão para quantos parâmetros desejar.

Modifique a função incrementadicionando parâmetros padrão para que ela adicione 1 numberse valuenão for especificado.
*/
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

/*
O resultado de increment(5, 2)deveria ser 7.

O resultado de increment(5)deveria ser 6.

Um valor de parâmetro padrão de 1deve ser usado para value.
*/