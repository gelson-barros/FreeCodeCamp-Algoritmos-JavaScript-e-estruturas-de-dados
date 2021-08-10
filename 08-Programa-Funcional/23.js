/*
Use o método some para verificar se quaisquer elementos em uma matriz atendem a um critério
O somemétodo funciona com matrizes para verificar se algum elemento passa em um teste específico. Ele retorna um valor booleano - truese algum dos valores atender aos critérios, falsecaso contrário.

Por exemplo, o código a seguir verifica se algum elemento da numbersmatriz é menor que 10:
*/
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function (currentValue) {
    return currentValue < 10;
});
/*
O somemétodo retornaria true.

Use o somemétodo dentro da checkPositivefunção para verificar se algum elemento em arré positivo. A função deve retornar um valor booleano.
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function (currentValue) {
        return currentValue > 0;
    });

    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

/*
Seu código deve usar o somemétodo.

checkPositive([1, 2, 3, -4, 5])deve retornar true.

checkPositive([1, 2, 3, 4, 5])deve retornar true.

checkPositive([-1, -2, -3, -4, -5])deve retornar
*/