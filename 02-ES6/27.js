/*
Importar uma exportação padrãoPassado
No último desafio, você aprendeu sobre export defaulte seus usos. Para importar uma exportação padrão, você precisa usar uma importsintaxe diferente . No exemplo a seguir, addé a exportação padrão do math_functions.jsarquivo. Aqui está como importá-lo:

import add from "./math_functions.js";
A sintaxe difere em um lugar-chave. O valor importado,, addnão está entre chaves ( {}). addaqui está simplesmente um nome de variável para qualquer que seja a exportação padrão do math_functions.jsarquivo. Você pode usar qualquer nome aqui ao importar um padrão.

No código a seguir, importe a exportação padrão do math_functions.jsarquivo, localizado no mesmo diretório deste arquivo. Dê o nome à importação subtract.
*/

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);

/*
Você deve importar corretamente subtractde math_functions.js.
*/