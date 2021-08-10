/*
Use Atribuição de Destruição para Atribuir Variáveis ​​de Objetos

A desestruturação permite que você atribua um novo nome de variável ao extrair valores. Você pode fazer isso colocando o novo nome após dois pontos ao atribuir o valor.

Usando o mesmo objeto do último exemplo:

const user = { name: 'John Doe', age: 34 };
Veja como você pode dar novos nomes de variáveis ​​na atribuição:

const { name: userName, age: userAge } = user;
Você pode ler como "obter o valor de user.namee atribuí-lo a uma nova variável chamada userName" e assim por diante. O valor de userNameseria a string John Doee o valor de userAgeseria o número 34.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis highTodaye highTomorrowos valores de todaye tomorrowdo HIGH_TEMPERATURESobjeto.
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
//const highToday = HIGH_TEMPERATURES.today;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line

/*
Você deve remover a sintaxe de atribuição ES5.

Você deve usar a desestruturação para criar a highTodayvariável.

Você deve usar a desestruturação para criar a highTomorrowvariável.

highTodaydeve ser igual a 77e highTomorrowdeve ser igual a 80.
*/