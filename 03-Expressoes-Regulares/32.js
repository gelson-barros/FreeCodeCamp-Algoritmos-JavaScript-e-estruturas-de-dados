/*
Use grupos de captura para pesquisar e substituir

Pesquisar é útil. No entanto, você pode tornar a pesquisa ainda mais poderosa quando ela também altera (ou substitui) o texto que você encontrou.

Você pode pesquisar e substituir texto em uma string usando .replace()em uma string. As entradas .replace()são primeiro o padrão regex que você deseja pesquisar. O segundo parâmetro é a string para substituir a correspondência ou uma função para fazer algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
A replacechamada retornaria a string The sky is blue..

Você também pode acessar grupos de captura na string de substituição com cifrões ( $).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
A replacechamada retornaria a string Camp Code.

Escreva um regex fixRegexusando três grupos de captura que pesquisarão cada palavra na string one two three. Em seguida, atualize a replaceTextvariável para substituir one two threepela string three two onee atribua o resultado à resultvariável. Certifique-se de usar grupos de captura na string de substituição usando a $sintaxe do cifrão ( ).
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

/*
Você deve usar .replace()para pesquisar e substituir.

Seu regex deve mudar a string one two threepara a stringthree two one

Você não deve alterar a última linha.

fixRegex deve usar pelo menos três grupos de captura.

replaceText deve usar string (s) de submatch entre parênteses (ou seja, a enésima string de submatch entre parênteses, $ n, corresponde ao enésimo grupo de captura).
*/