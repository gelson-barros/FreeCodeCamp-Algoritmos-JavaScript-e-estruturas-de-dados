/*
Ordem Lógica em Declarações If ElsePassado
A ordem é importante em if, else ifdeclarações.

A função é executada de cima para baixo, portanto, você deve ter cuidado com a instrução que vem primeiro.

Veja essas duas funções como exemplo.

Aqui está o primeiro:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
E o segundo apenas muda a ordem das declarações:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
Embora essas duas funções pareçam quase idênticas, se passarmos um número para ambas, obteremos resultados diferentes.

foo(0)
bar(0)
foo(0)retornará a string Less than onee bar(0)retornará a string Less than two.

Altere a ordem da lógica na função para que ela retorne as instruções corretas em todos os casos.
*/

function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

/*
orderMyLogic(4) deve retornar a string Less than 5

orderMyLogic(6) deve retornar a string Less than 10

orderMyLogic(11) deve retornar a string Greater than or equal to 10
*/