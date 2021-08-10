/*
Catch argumentos transmitidos na ordem errada ao chamar uma função
Continuando a discussão sobre a chamada de funções, o próximo bug a observar é quando os argumentos de uma função são fornecidos na ordem incorreta. Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um inteiro, isso provavelmente gerará um erro de tempo de execução. Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), então a lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos necessários, na ordem adequada para evitar esses problemas.

A função raiseToPower eleva uma base a um expoente. Infelizmente, ele não é chamado corretamente - corrija o código para que o valor de power8 seja o esperado.
*/

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

/*
Seu código deve corrigir a variável powerpara que seja igual a 2 elevado à 3ª potência, não 3 elevado à 2ª potência.

Seu código deve usar a ordem correta dos argumentos para a raiseToPowerchamada de função.
*/