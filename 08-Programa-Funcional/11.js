/*
Retornar parte de uma matriz usando o método de fatia
O slicemétodo retorna uma cópia de certos elementos de uma matriz. Pode receber dois argumentos, o primeiro fornece o índice de onde começar a fatia, o segundo é o índice de onde terminar a fatia (e não é inclusivo). Se os argumentos não forem fornecidos, o padrão é começar do início do array até o final, que é uma maneira fácil de fazer uma cópia de todo o array. O slicemétodo não altera o array original, mas retorna um novo.

Aqui está um exemplo:
*/
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
/*
newArrayteria o valor ["Dog", "Tiger"].

Use o slicemétodo na sliceArrayfunção para retornar parte da animmatriz, dados os índices beginSlicee fornecidos endSlice. A função deve retornar uma matriz.
*/

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);

    // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

/*
Seu código deve usar o slicemétodo.

A inputAnimvariável não deve mudar.

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)deve retornar ["Dog", "Tiger"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)deve retornar ["Cat"].

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)deve retornar ["Dog", "Tiger", "Zebra"].
*/