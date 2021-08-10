/*
Implementar o método de filtro em um protótipo
Você pode aprender muito sobre o filter método se implementar sua própria versão dele. É recomendável usar um forloop ou Array.prototype.forEach().

Escreva o seu próprio Array.prototype.myFilter(), que deve se comportar exatamente como Array.prototype.filter(). Você não deve usar o filtermétodo embutido . A Array instância pode ser acessada no myFilter método usando this.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for(let i = 0; i < this.length; i++){
     if(callback(this[i])){
       newArray.push(this[i]);
     }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

/*
new_s deve ser igual [23, 65, 5].

Seu código não deve usar o filter método.
*/