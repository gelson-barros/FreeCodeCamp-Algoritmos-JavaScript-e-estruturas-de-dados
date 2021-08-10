/*
Reutilizar código JavaScript usando importação

import permite que você escolha quais partes de um arquivo ou módulo carregar. Na lição anterior, os exemplos foram exportados add do math_functions.js arquivo. Veja como você pode importá-lo para usar em outro arquivo:

import { add } from './math_functions.js';
Aqui, import encontrará add no math_functions.js, importará apenas aquela função para você usar e ignorará o resto. O ./ instrui a importação a procurar o math_functions.js arquivo na mesma pasta do arquivo atual. O caminho relativo do arquivo ( ./) e a extensão do arquivo ( .js) são necessários ao usar a importação dessa forma.

Você pode importar mais de um item do arquivo, adicionando-os na importinstrução desta forma:

import { add, subtract } from './math_functions.js';
Adicione a importinstrução apropriada que permitirá que o arquivo atual use as funções uppercaseStringe lowercaseStringexportadas na lição anterior. Essas funções estão em um arquivo chamado string_functions.js, que está no mesmo diretório do arquivo atual.
*/
uppercaseString("hello");
lowercaseString("WORLD!");
import { uppercaseString, lowercaseString } from "./string_functions.js";

/*
Você deve importar corretamente uppercaseString.

Você deve importar corretamente lowercaseString.
*/