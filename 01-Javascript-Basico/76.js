/*
Múltiplas opções idênticas em declarações de switchPassado
Se a breakinstrução for omitida de uma switchinstrução case, a case(s) instrução (ões) a seguir serão executadas até que um breakseja encontrado. Se você tiver várias entradas com a mesma saída, poderá representá-las em uma switchinstrução como esta:

var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Casos para 1, 2 e 3 produzirão o mesmo resultado.

Escreva uma instrução switch para definir answeros seguintes intervalos:
1-3- Low
4-6- Mid
7-9-High

Observação: você precisará ter um caseextrato para cada número do intervalo.
*/

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line

    // Only change code above this line
    return answer;
}

sequentialSizes(1);

/*
sequentialSizes(1) deve retornar a string Low

sequentialSizes(2) deve retornar a string Low

sequentialSizes(3) deve retornar a string Low

sequentialSizes(4) deve retornar a string Mid

sequentialSizes(5) deve retornar a string Mid

sequentialSizes(6) deve retornar a string Mid

sequentialSizes(7) deve retornar a string High

sequentialSizes(8) deve retornar a string High

sequentialSizes(9) deve retornar a string High

Você não deve usar nenhuma declaração ifouelse

Você deve ter nove casedeclarações
*/
