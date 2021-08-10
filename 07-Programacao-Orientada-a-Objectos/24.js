/*
Use o fechamento para proteger as propriedades de um objeto de serem modificadas externamente
No desafio anterior, birdtinha um bem público name. É considerado público porque pode ser acessado e alterado fora da birddefinição de.
*/

bird.name = "Duffy";

/*
Portanto, qualquer parte do seu código pode facilmente alterar o nome de birdpara qualquer valor. Pense em coisas como senhas e contas bancárias que podem ser facilmente alteradas por qualquer parte de sua base de código. Isso pode causar muitos problemas.

A maneira mais simples de tornar essa propriedade pública privada é criando uma variável dentro da função do construtor. Isso altera o escopo dessa variável para estar dentro da função do construtor versus disponível globalmente. Dessa forma, a variável só pode ser acessada e alterada por métodos também dentro da função construtora.
*/

function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/*
Aqui getHatchedEggCountestá um método privilegiado, porque tem acesso à variável privada hatchedEgg. Isso é possível porque hatchedEggé declarado no mesmo contexto que getHatchedEggCount. Em JavaScript, uma função sempre tem acesso ao contexto no qual foi criada. Isso é chamado closure.

Altere como weighté declarado na Birdfunção para que seja uma variável privada. Em seguida, crie um método getWeightque retorne o valor weight15.
*/

function Bird() {
    let weight = 15;

    this.getWeight = function () {
        return weight;
    };
}



/*
A weightpropriedade deve ser uma variável privada e deve receber o valor de 15.

Seu código deve criar um método Birdchamado getWeightque retorna o valor da variável privada weight.

Sua getWeightfunção deve retornar a variável privada weight.
*/