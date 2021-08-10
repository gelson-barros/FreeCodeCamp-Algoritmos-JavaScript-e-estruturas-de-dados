/*
Copiar itens da matriz usando um slice ()

O próximo método que abordaremos é slice(). Em vez de modificar um array, slice()copia ou extrai um determinado número de elementos para um novo array, deixando o array chamado intacto. slice()leva apenas 2 parâmetros - o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual interromper a extração (a extração ocorrerá até, mas não incluindo o elemento neste índice). Considere isto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
todaysWeatherteria o valor ['snow', 'sleet'], enquanto weatherConditionsainda teria ['rain', 'snow', 'sleet', 'hail', 'clear'].

Na verdade, criamos um novo array extraindo elementos de um array existente.

Definimos uma função forecast,, que recebe um array como argumento. Modifique a função usando slice()para extrair informações da matriz de argumento e retornar uma nova matriz que contém os elementos de string warme sunny.
*/

function forecast(arr) {
  // Only change code below this line
  const mayArr = arr.slice(2, 4);
  return mayArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


/*
forecast deveria retornar ["warm", "sunny"]

A forecastfunção deve utilizar o slice()método
*/