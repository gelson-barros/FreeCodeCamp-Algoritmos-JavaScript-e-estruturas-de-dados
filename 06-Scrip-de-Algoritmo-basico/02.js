/*
Reverter uma corda
Inverta a string fornecida.

Você pode precisar transformar a string em uma matriz antes de poder invertê-la.

Seu resultado deve ser uma string.
*/

function reverseString(str) {
    // let str2 = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     str2 += str[i];
    //     str2;
    // }
    // return str2;

    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

/*
everseString("hello") deve retornar uma string.

reverseString("hello")deve retornar a string olleh.

reverseString("Howdy")deve retornar a string ydwoH.

reverseString("Greetings from Earth")deve retornar a string htraE morf sgniteerG.
*/