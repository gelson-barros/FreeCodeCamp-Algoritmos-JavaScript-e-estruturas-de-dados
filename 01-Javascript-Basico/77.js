/*
Substituição de cadeias if Else com switchPassado
Se você tiver muitas opções para escolher, uma switchdeclaração pode ser mais fácil de escrever do que muitas declarações if/ encadeadas else if. Os seguintes:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
pode ser substituído por:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Transforme as instruções if/ encadeadas else ifem uma switchinstrução.
*/

 function chainToSwitch(val) {
     var answer = "";
     // Only change code below this line

     if (val === "bob") {
         answer = "Marley";
     } else if (val === 42) {
         answer = "The Answer";
     } else if (val === 1) {
         answer = "There is no #1";
     } else if (val === 99) {
         answer = "Missed me by this much!";
     } else if (val === 7) {
         answer = "Ate Nine";
     }

     // Only change code above this line
     return answer;
 }

 chainToSwitch(7);

 /*
 Você não deve usar nenhuma elsedeclaração em qualquer lugar do editor

Você não deve usar nenhuma ifdeclaração em qualquer lugar do editor

Você deve ter pelo menos quatro breakdeclarações

chainToSwitch("bob") deve ser a corda Marley

chainToSwitch(42) deve ser a corda The Answer

chainToSwitch(1) deve ser a corda There is no #1

chainToSwitch(99) deve ser a corda Missed me by this much!

chainToSwitch(7) deve ser a corda Ate Nine

chainToSwitch("John")deve ser ""(string vazia)

chainToSwitch(156)deve ser ""(string vazia)
*/