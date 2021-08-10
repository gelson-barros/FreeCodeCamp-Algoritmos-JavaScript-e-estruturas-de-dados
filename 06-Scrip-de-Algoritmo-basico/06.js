/*
Confirme o final
Verifique se uma string (primeiro argumento, str) termina com a string de destino fornecida (segundo argumento, target).

Este desafio pode ser resolvido com o .endsWith()método, que foi introduzido no ES2015. Mas, para o propósito deste desafio, gostaríamos que você usasse um dos métodos de substring JavaScript.
*/

// function confirmEnding(str, target) {
//     return str.includes(target);
// }

function confirmEnding(str, target) {
    // return str.substring(str.length - target.length, str.length) === target;

    // return str.slice(str.length - target.length) === target;

    // let re = new RegExp(target + "$", "i");
    // return re.test(str);

    return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

/*
confirmEnding("Bastian", "n")deve retornar true.

confirmEnding("Congratulation", "on")deve retornar true.

confirmEnding("Connor", "n")deve retornar false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")deve retornar false.

confirmEnding("He has to give me a new name", "name")deve retornar true.

confirmEnding("Open sesame", "same")deve retornar true.

confirmEnding("Open sesame", "sage")deve retornar false.

confirmEnding("Open sesame", "game")deve retornar false.

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")deve retornar false.

confirmEnding("Abstraction", "action")deve retornar true.

Seu código não deve usar o método integrado .endsWith()para resolver o desafio.
*/