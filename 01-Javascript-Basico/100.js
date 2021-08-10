/*
Iterar com JavaScript Do ... While LoopsPassado
O próximo tipo de loop que você aprenderá é chamado de do...whileloop. É chamado de do...whileloop porque primeiro dopassa uma passagem do código dentro do loop, não importa o que aconteça, e depois continua a executar o loop para whileo qual a condição especificada é avaliada true.

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
O exemplo acima se comporta de forma semelhante a outros tipos de loops, e a matriz resultante será semelhante a [0, 1, 2, 3, 4]. No entanto, o que o torna do...whilediferente de outros loops é como ele se comporta quando a condição falha na primeira verificação. Vamos ver isso em ação: Aqui está um whileloop regular que executará o código no loop, desde que i < 5:

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
Neste exemplo, inicializamos o valor de ourArraycom uma matriz vazia e o valor de icom 5. Quando executamos o whileloop, a condição é avaliada como falseporque inão é menor que 5, portanto, não executamos o código dentro do loop. O resultado é que ourArrayterminará sem nenhum valor adicionado a ele e ainda terá a aparência de []quando todo o código no exemplo acima tiver concluído a execução. Agora, dê uma olhada em um do...whileloop:

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
Nesse caso, inicializamos o valor de ipara 5, assim como fizemos com o whileloop. Quando chegamos à próxima linha, não há condição para avaliar, então vamos para o código dentro das chaves e o executamos. Vamos adicionar um único elemento ao array e, em seguida, incrementar iantes de chegarmos à verificação da condição. Quando finalmente avaliamos a condição i < 5na última linha, vemos que iagora é 6, que falha na verificação condicional, então saímos do loop e terminamos. No final do exemplo acima, o valor de ourArrayé [5]. Essencialmente, um do...whileloop garante que o código dentro do loop seja executado pelo menos uma vez. Vamos tentar fazer um do...whileloop funcionar empurrando valores para um array.

Altere o whileloop no código para um do...whileloop de forma que o loop empurre apenas o número 10para myArraye iserá igual a 11quando seu código terminar de ser executado.
*/

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}

/*
Você deve usar um do...whileloop para este exercício.

myArraydeve ser igual [10].

i deve ser igual 11
*/