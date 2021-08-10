/*
Use Atribuição de Desestruturação para Extrair Valores de Objetos

A designação de desestruturação é uma sintaxe especial introduzida no ES6, para designar ordenadamente valores retirados diretamente de um objeto.

Considere o seguinte código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name teria um valor da string John Doee ageteria o número 34.

Aqui está uma instrução de atribuição equivalente usando a sintaxe de desestruturação ES6:

const { name, age } = user;
Novamente, nameteria um valor da string John Doee ageteria o número 34.

Aqui, as variáveis namee ageserão criadas e atribuídas aos valores de seus respectivos valores do userobjeto. Você pode ver o quanto isso é mais limpo.

Você pode extrair quantos valores quiser do objeto.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis todaye tomorrowos valores de todaye tomorrowdo HIGH_TEMPERATURES objeto.
*/ 

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

/*
Você deve remover a sintaxe de atribuição ES5.

Você deve usar a desestruturação para criar a todayvariável.

Você deve usar a desestruturação para criar a tomorrowvariável.

todaydeve ser igual a 77e tomorrowdeve ser igual a 80.
*/
