/*
Torne o código mais reutilizável com esta palavra-chave
O último desafio introduziu um método para o duckobjeto. Ele usou a duck.namenotação de ponto para acessar o valor da namepropriedade dentro da instrução de retorno:

sayName: function() {return "The name of this duck is " + duck.name + ".";}
Embora essa seja uma forma válida de acessar a propriedade do objeto, há uma armadilha aqui. Se o nome da variável mudar, qualquer código que faça referência ao nome original também precisará ser atualizado. Em uma definição curta de objeto, não é um problema, mas se um objeto tiver muitas referências às suas propriedades, há uma chance maior de erro.

Uma maneira de evitar esses problemas é com a thispalavra-chave:
*/

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function () {
        return "The name of this duck is " + this.name + ".";
    },
};

/*
this é um tópico profundo e o exemplo acima é apenas uma maneira de usá-lo. No actual contexto, this refere-se ao objecto que o método está associado com: duck. Se o nome do objeto for alterado para mallard, não é necessário encontrar todas as referências a duck no código. Isso torna o código reutilizável e mais fácil de ler.

Modifique o dog.sayLegs método para remover quaisquer referências a dog. Use o duckexemplo para orientação.
*/

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    },
};

dog.sayLegs();

/*
dog.sayLegs() deve retornar a string fornecida.

Seu código deve usar a thispalavra-chave para acessar a numLegspropriedade de dog.
*/