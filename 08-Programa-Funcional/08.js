/*
Implementar mapa em um protótipo
Como você viu na aplicação Array.prototype.map(), ou simplesmente map()anteriormente, o mapmétodo retorna um array do mesmo comprimento daquele em que foi chamado. Ele também não altera o array original, desde que sua função de retorno de chamada não altere.

Em outras palavras, mapé uma função pura e sua saída depende exclusivamente de suas entradas. Além disso, leva outra função como argumento.

Você pode aprender muito sobre o mapmétodo se implementar sua própria versão dele. É recomendável usar um forloop ou Array.prototype.forEach().

Escreva o seu próprio Array.prototype.myMap(), que deve se comportar exatamente como Array.prototype.map(). Você não deve usar o mapmétodo embutido . A Arrayinstância pode ser acessada no myMapmétodo usando this.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; i++){
      newArray.push(callback(this[i]))
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

/*
new_sdeve ser igual [46, 130, 196, 10].

Seu código não deve usar o mapmétodo.
*/