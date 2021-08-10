/*
Adicionando uma opção padrão nas instruções de switchPassado
Em uma switchdeclaração, você pode não ser capaz de especificar todos os valores possíveis como casedeclarações. Em vez disso, você pode adicionar a defaultinstrução que será executada se nenhuma caseinstrução correspondente for encontrada. Pense nisso como a elsedeclaração final de uma if/elsecadeia.

Uma defaultdeclaração deve ser o último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Escreva uma instrução switch para definir answeras seguintes condições:
a- apple
b- bird
c- cat
default-stuff
*/

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line

    // Only change code above this line
    return answer;
}

switchOfStuff(1);

/*
switchOfStuff("a") deve retornar a string apple

switchOfStuff("b") deve retornar a string bird

switchOfStuff("c") deve retornar a string cat

switchOfStuff("d") deve retornar a string stuff

switchOfStuff(4) deve retornar a string stuff

Você não deve usar nenhuma declaração ifouelse

Você deve usar uma defaultdeclaração

Você deve ter pelo menos 3 breakdeclarações
*/