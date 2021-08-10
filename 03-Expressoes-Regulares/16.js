/*
Corresponder padrões iniciais de string

Desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar uma série de correspondências. Eles também são usados ​​para pesquisar padrões em posições específicas em strings.

Em um desafio anterior, você usou o caractere circunflexo ( ^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negado no formulário [^thingsThatWillNotBeMatched]. Fora de um conjunto de caracteres, o circunflexo é usado para pesquisar padrões no início das strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
A primeira testchamada retornaria true, enquanto a segunda retornaria false.

Use o acento circunflexo em uma regex para localizar Calapenas no início da string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

/*
Seu regex deve procurar a string Calcom uma letra maiúscula.

Seu regex não deve usar nenhum sinalizador.

Sua regex deve corresponder à string Calno início da string.

Sua regex não deve corresponder à string Calno meio de uma string.
*/