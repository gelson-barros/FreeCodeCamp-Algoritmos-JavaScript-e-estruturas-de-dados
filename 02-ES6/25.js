/*
Use * para importar tudo de um arquivo

Suponha que você tenha um arquivo e deseja importar todo o seu conteúdo para o arquivo atual. Isso pode ser feito com a import * assintaxe. Aqui está um exemplo em que o conteúdo de um arquivo denominado math_functions.jsé importado para um arquivo no mesmo diretório:

import * as myMathModule from "./math_functions.js";
A importinstrução acima criará um objeto chamado myMathModule. Este é apenas um nome de variável, você pode nomeá-lo de qualquer maneira. O objeto conterá todas as exportações math_functions.jsdele, para que você possa acessar as funções como faria com qualquer outra propriedade do objeto. Veja como você pode usar as funções adde subtractque foram importadas:

myMathModule.add(2,3);
myMathModule.subtract(5,3);
O código neste arquivo requer o conteúdo do arquivo:, string_functions.jsque está no mesmo diretório que o arquivo atual. Use a import * assintaxe para importar tudo do arquivo para um objeto chamado stringFunctions.
*/

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";

/*
Seu código deve usar a import * assintaxe corretamente .
*/