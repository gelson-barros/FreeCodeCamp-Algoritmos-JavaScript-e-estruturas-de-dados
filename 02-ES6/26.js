/*
Criar um substituto de exportação com padrão de exportação

Na exportlição, você aprendeu sobre a sintaxe conhecida como exportação nomeada . Isso permitiu que você disponibilizasse várias funções e variáveis ​​para uso em outros arquivos.

Há outra exportsintaxe que você precisa conhecer, conhecida como padrão de exportação . Normalmente, você usará essa sintaxe se apenas um valor estiver sendo exportado de um arquivo. Ele também é usado para criar um valor de fallback para um arquivo ou módulo.

Abaixo estão alguns exemplos usando export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
A primeira é uma função nomeada e a segunda é uma função anônima.

Como export defaulté usado para declarar um valor de fallback para um módulo ou arquivo, você só pode ter um valor como exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar export defaultcom var, letouconst

A função a seguir deve ser o valor de fallback para o módulo. Adicione o código necessário para fazer isso.
*/

export default function subtract(x, y) {
    return x - y;
}
//ou
//export default function (x, y) {
//    return x - y;
//}



/*
Seu código deve usar um exportsubstituto.
*/