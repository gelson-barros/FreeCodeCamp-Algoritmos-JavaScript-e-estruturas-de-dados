/*
Estenda Construtores para Receber Argumentos
Os construtores Birde Dogdo último desafio funcionaram bem. No entanto, observe que todos os Birdsque são criados com o Birdconstrutor são automaticamente denominados Albert, são da cor azul e têm duas pernas. E se você quiser pássaros com diferentes valores de nome e cor? É possível alterar as propriedades de cada ave manualmente, mas isso daria muito trabalho:
*/
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
/*
Suponha que você esteja escrevendo um programa para rastrear centenas ou até milhares de pássaros diferentes em um aviário. Levaria muito tempo para criar todos os pássaros e, em seguida, alterar as propriedades para valores diferentes para cada um. Para criar Birdobjetos diferentes com mais facilidade , você pode projetar seu construtor Bird para aceitar parâmetros:
*/
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let cardinal = new Bird("Bruce", "red");
/*
Em seguida, passe os valores como argumentos para definir cada pássaro exclusivo para o Birdconstrutor: let cardinal = new Bird("Bruce", "red");Isso fornece uma nova instância de Birdcom namee colorpropriedades definidas para Brucee red, respectivamente. A numLegspropriedade ainda está definida como 2. O cardinaltem estas propriedades:
*/
cardinal.name;
cardinal.color;
cardinal.numLegs;

/*
O construtor é mais flexível. Agora é possível definir as propriedades de cada um Bird no momento em que são criados, o que é uma maneira que os construtores JavaScript são tão úteis. Eles agrupam objetos com base em características e comportamentos compartilhados e definem um projeto que automatiza sua criação.

Crie outro Dog construtor. Desta vez, configure-o para receber os parâmetros name e color, e tenha a propriedade numLegs fixada em 4. Em seguida, crie um novo Dog salvo em uma variável terrier. Passe duas strings como argumentos para as propriedades namee color.
*/

function Dog(name, color) {
    (this.name = name), (this.color = color), (this.numLegs = 4);
}
let terrier = new Dog();

/*
Dog deve receber um argumento para name.

Dog deve receber um argumento para color.

Dog deve ter a propriedade numLegsdefinida como 4.

terrier deve ser criado usando o Dogconstrutor.
*/