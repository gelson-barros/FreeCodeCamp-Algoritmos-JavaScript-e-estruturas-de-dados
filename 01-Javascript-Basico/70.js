/*
Apresentando as declarações Else IfPassado
Se você tiver várias condições que precisam ser tratadas, pode encadear ifinstruções com else ifinstruções.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Converta a lógica para usar else ifinstruções.
*/

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    if (val < 5) {
        return "Smaller than 5";
    }

    return "Between 5 and 10";
}

testElseIf(7);

/*
Você deve ter pelo menos duas else declarações

Você deve ter pelo menos duas if declarações

Você deve ter chaves de fechamento e abertura para cada if elsebloco de código.

testElseIf(0) deve retornar a string Smaller than 5

testElseIf(5) deve retornar a string Between 5 and 10

testElseIf(7) deve retornar a string Between 5 and 10

testElseIf(10) deve retornar a string Between 5 and 10

testElseIf(12) deve retornar a string Greater than 10
*/