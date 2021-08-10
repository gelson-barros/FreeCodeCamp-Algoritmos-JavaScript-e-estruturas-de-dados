/*
Crie matrizes multidimensionais complexas
Impressionante! Você acabou de aprender muito sobre matrizes! Esta foi uma visão geral de alto nível e há muito mais para aprender sobre como trabalhar com arrays, muitos dos quais você verá em seções posteriores. Mas antes de prosseguirmos para a análise de objetos , vamos dar mais uma olhada e ver como os arrays podem se tornar um pouco mais complexos do que o que vimos nos desafios anteriores.

Um dos recursos mais poderosos quando se pensa em arrays como estruturas de dados, é que os arrays podem conter, ou mesmo ser completamente compostos por outros arrays. Vimos arrays que contêm arrays em desafios anteriores, mas bastante simples. No entanto, as matrizes podem conter uma profundidade infinita de matrizes que podem conter outras matrizes, cada uma com seus próprios níveis arbitrários de profundidade e assim por diante. Dessa forma, uma matriz pode rapidamente se tornar uma estrutura de dados muito complexa, conhecida como uma matriz multidimensional ou aninhada. Considere o seguinte exemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
A deepmatriz está aninhada em 2 níveis de profundidade. As deepermatrizes têm 3 níveis de profundidade. As deepestmatrizes têm 4 níveis e o deepest-est?é 5.

Embora este exemplo possa parecer complicado, esse nível de complexidade não é inédito, ou mesmo incomum, ao lidar com grandes quantidades de dados. No entanto, ainda podemos acessar facilmente os níveis mais profundos de uma matriz deste complexo com a notação de colchetes:

console.log(nestedArray[2][1][0][0][0]);
Isso registra a string deepest-est?. E agora que sabemos onde esse dado está, podemos redefini-lo se precisarmos:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
Agora ele registra deeper still.

Definimos uma variável myNestedArray,, igual a um array. Modifique myNestedArray, usando qualquer combinação de strings , números e booleanos para elementos de dados, de modo que tenha exatamente cinco níveis de profundidade (lembre-se de que o array mais externo é o nível 1). Em algum lugar no terceiro nível, inclua o barbante deep, no quarto nível, inclua o barbante deepere, no quinto nível, inclua o barbante deepest.
*/

// let myNestedArray = [
//     // change code below this line
//     ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
//     // change code above this line
// ];

//ou

let myNestedArray = [
    // Only change code below this line
    "level 1" /* myNestedArray[0]             */,
    ["level 2"] /* myNestedArray[1][0]          */,
    [["level 3", "deep"]] /* myNestedArray[2][0][0]       */,
    [[["level 4", "deeper"]]] /* myNestedArray[3][0][0][0]    */,
    [[[["level 5", "deepest"]]]] /* myNestedArray[4][0][0][0][0] */,
    // Only change code above this line
];

/*
myNestedArray deve conter apenas números, booleanos e strings como elementos de dados

myNestedArray deve ter exatamente 5 níveis de profundidade

myNestedArraydeve conter exatamente uma ocorrência da string deepem uma matriz aninhada com 3 níveis de profundidade

myNestedArraydeve conter exatamente uma ocorrência da string deeperem uma matriz aninhada com 4 níveis de profundidade

myNestedArraydeve conter exatamente uma ocorrência da string deepestem uma matriz aninhada com 5 níveis de profundidade

*/