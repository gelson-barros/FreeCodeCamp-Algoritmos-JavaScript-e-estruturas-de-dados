/*
Sequências de escape em strings
As aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Existem dois motivos para usar caracteres de escape:

Para permitir que você use caracteres que de outra forma não seria capaz de digitar, como um retorno de carro.
Para permitir que você represente várias aspas em uma string sem que o JavaScript interprete mal o que você quer dizer.
Aprendemos isso no desafio anterior.

Código	Resultado
\'	citação única
\"	citação dupla
\\	barra invertida
\n	nova linha
\r	retorno de carruagem
\t	aba
\b	limite de palavra
\f	feed de formulário
Observe que a própria barra invertida deve ter escape para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir à variável única myStr usando sequências de escape.

FirstLine
    \ SecondLine
ThirdLine
Você precisará usar sequências de escape para inserir caracteres especiais corretamente. Você também precisará seguir o espaçamento conforme aparece acima, sem espaços entre as sequências de escape ou palavras.

Observação: o recuo para SecondLine é obtido com o caractere de escape da tabulação, não com espaços.
*/

var myStr = "FirstLine \n \tSecondLine \nThirdLine "; // Change this line

/*
myStr não deve conter espaços

myStr deve conter as strings FirstLine, SecondLinee ThirdLine(lembre-se da distinção entre maiúsculas e minúsculas)

FirstLine deve ser seguido pelo caractere de nova linha \n

myStrdeve conter um caractere de tabulação \tque segue um caractere de nova linha

SecondLine deve ser precedido pelo caractere de barra invertida \

Deve haver um caractere de nova linha entre SecondLineeThirdLine

myStr deve conter apenas os caracteres mostrados nas instruções
*/