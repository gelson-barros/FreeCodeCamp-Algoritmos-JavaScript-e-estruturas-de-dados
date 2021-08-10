/*
Use Atribuição de Destruição para Atribuir Variáveis ​​de Objetos Aninhados

Você pode usar os mesmos princípios das duas lições anteriores para desestruturar valores de objetos aninhados.

Usando um objeto semelhante aos exemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Veja como extrair os valores das propriedades do objeto e atribuí-los a variáveis ​​com o mesmo nome:

const { johnDoe: { age, email }} = user;
E aqui está como você pode atribuir os valores das propriedades de um objeto a variáveis ​​com nomes diferentes:

const { johnDoe: { age: userAge, email: userEmail }} = user;
Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis lowTodaye highTodayos valores de today.lowe today.highdo LOCAL_FORECASTobjeto.
*/
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today: {low: lowToday , high:highToday} } = LOCAL_FORECAST
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line

/*
Você deve remover a sintaxe de atribuição ES5.

Você deve usar a desestruturação para criar a lowTodayvariável.

Você deve usar a desestruturação para criar a highTodayvariável.

lowTodaydeve ser igual a 64e highTodaydeve ser igual a 77.
*/