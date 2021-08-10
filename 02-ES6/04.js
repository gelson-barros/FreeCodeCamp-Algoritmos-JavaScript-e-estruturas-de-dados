/*
Transformar um array declarado com const

A constdeclaração tem muitos casos de uso em JavaScript moderno.

Alguns desenvolvedores preferem atribuir todas as suas variáveis ​​usando constpor padrão, a menos que saibam que precisarão reatribuir o valor. Só nesse caso, eles usam let.

No entanto, é importante entender que os objetos (incluindo matrizes e funções) atribuídos a uma variável usando constainda são mutáveis. Usar a constdeclaração apenas evita a reatribuição do identificador da variável.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3]resultará em um erro. O console.logexibirá o valor [5, 6, 45].

Como você pode ver, você pode alterar o [5, 6, 7]próprio objeto e a variável sainda apontará para o array alterado [5, 6, 45]. Como todas as matrizes, os elementos da matriz em ssão mutáveis, mas como constfoi usado, você não pode usar o identificador de variável spara apontar para uma matriz diferente usando o operador de atribuição.

Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7]usar várias atribuições de elemento.
*/

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
    // Only change code above this line
}
editInPlace();

/*
Você não deve substituir a constpalavra-chave.

sdeve ser uma variável constante (usando const).

Você não deve alterar a declaração da matriz original.

sdeve ser igual a [2, 5, 7].
*/