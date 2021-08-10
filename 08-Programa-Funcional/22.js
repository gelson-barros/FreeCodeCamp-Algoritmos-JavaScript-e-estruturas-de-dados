/*
Use o método every para verificar se cada elemento em uma matriz atende a um critério
O everymétodo funciona com matrizes para verificar se cada elemento passa em um teste específico. Ele retorna um valor booleano - truese todos os valores atendem aos critérios, falsecaso contrário.

Por exemplo, o código a seguir verifica se todos os elementos da numbersmatriz são menores que 10:
*/

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function (currentValue) {
    return currentValue < 10;
});

/*
O everymétodo retornaria falseaqui.

Use o everymétodo dentro da checkPositivefunção para verificar se todos os elementos em arr são positivos. A função deve retornar um valor booleano.
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.every((current) => current > 0);

    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

/*
Seu código deve usar o everymétodo.

checkPositive([1, 2, 3, -4, 5])deve retornar false.

checkPositive([1, 2, 3, 4, 5])deve retornar true.

checkPositive([1, -2, 3, -4, 5])deve retornar false.
*/