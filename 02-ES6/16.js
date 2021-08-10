/*
Use a atribuição de desestruturação para passar um objeto como parâmetros de uma função

Em alguns casos, você pode desestruturar o objeto em um argumento de função.

Considere o código abaixo:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Isso destrói efetivamente o objeto enviado para a função. Isso também pode ser feito no local:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Quando profileDataé passado para a função acima, os valores são desestruturados do parâmetro da função para uso dentro da função.

Use a atribuição de desestruturação dentro do argumento para a função halfpara enviar apenas maxe mindentro da função.
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
//const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line


/*
statsdeve ser um object.

half(stats) deveria estar 28.015

A desestruturação deve ser usada.

O parâmetro desestruturado deve ser usado.
*/