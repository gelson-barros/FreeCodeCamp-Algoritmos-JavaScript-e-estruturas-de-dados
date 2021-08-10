/*
Use getters e setters para controlar o acesso a um objeto

Você pode obter valores de um objeto e definir o valor de uma propriedade dentro de um objeto.

Eles são classicamente chamados de getters e setters .

As funções getter destinam-se a simplesmente retornar (obter) o valor da variável privada de um objeto para o usuário, sem que o usuário acesse diretamente a variável privada.

As funções setter destinam-se a modificar (definir) o valor da variável privada de um objeto com base no valor passado para a função setter. Essa alteração pode envolver cálculos ou até mesmo sobrescrever completamente o valor anterior.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
O console exibiria as cordas anonymouse newAuthor.

Observe a sintaxe usada para invocar getter e setter. Eles nem mesmo se parecem com funções. Getters e setters são importantes porque ocultam detalhes de implementação internos.

Nota: É convenção preceder o nome de uma variável privada com um sublinhado ( _). No entanto, a prática em si não torna uma variável privada.

Use a classpalavra-chave para criar uma Thermostatclasse. O constructoraceita uma temperatura Fahrenheit.

Na classe, crie um getterpara obter a temperatura em Celsius e um setterpara definir a temperatura em Celsius.

Lembre-se que C = 5/9 * (F - 32)e F = C * 9.0 / 5 + 32, onde Fé o valor da temperatura em Fahrenheit, e Cé o valor da mesma temperatura em Celsius.

Observação: ao implementar isso, você rastreará a temperatura dentro da classe em uma escala, Fahrenheit ou Celsius.

Este é o poder de um getter e de um setter. Você está criando uma API para outro usuário, que pode obter o resultado correto, independentemente de qual deles você rastreia.

Em outras palavras, você está abstraindo detalhes de implementação do usuário.
*/

// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }

  //getter
  get temperature(){
    return (5/9)*(this.fahrenheit - 32);
  }

  //setter
  set temperature(celsius){
    this.fahrenheit = (celsius * 9.0)/5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*
Thermostatdeve ser um classcom um constructormétodo definido .

class palavra-chave deve ser usada.

Thermostat deve poder ser instanciado.

Quando instanciado com um valor Fahrenheit, Thermostatdeve definir o correto temperature.

A getterdeve ser definido.

A setterdeve ser definido.

Chamar o settercom um valor Celsius deve definir o temperature.
*/