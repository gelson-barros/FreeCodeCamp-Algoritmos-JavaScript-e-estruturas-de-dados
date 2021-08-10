/*
Verifique se há agrupamento misto de caracteres

Às vezes, queremos verificar grupos de caracteres usando uma Expressão Regular e, para isso, usamos parênteses ().

Se quiser encontrar um Penguinou Pumpkinem uma string, você pode usar a seguinte Expressão Regular:/P(engu|umpk)in/g

Em seguida, verifique se os grupos de strings desejados estão na string de teste usando o test()método.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
O testmétodo aqui retornaria true.

Corrija o regex para que verifique os nomes Franklin Rooseveltou Eleanor Rooseveltfaça distinção entre maiúsculas e minúsculas e faça concessões para nomes do meio.

Em seguida, corrija o código para que a regex que você criou seja verificada myStringe trueou falseseja retornada, dependendo da correspondência da regex.
*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

/*
Seu regex myRegexdeve retornar truepara a stringFranklin D. Roosevelt

Seu regex myRegexdeve retornar truepara a stringEleanor Roosevelt

Seu regex myRegexdeve retornar falsepara a stringFranklin Rosevelt
*/