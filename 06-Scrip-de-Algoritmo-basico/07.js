/*
Repita uma String Repita uma String
Repita uma determinada string str(primeiro argumento) por numvezes (segundo argumento). Retorne uma string vazia se numnão for um número positivo. Para o propósito deste desafio, não use o .repeat()método integrado .
*/

function repeatStringNumTimes(str, num) {
    // return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";

    // return str.repeat(num);

    let str2 = '';
    for (let i = 0; i < num ; i++) {
        str2 += str;
    }
    return str2;

    // var accumulatedStr = "";
    // while (num > 0) {
    //     accumulatedStr += str;
    //     num--;
    // }
    // return accumulatedStr;

    // if (num < 1) {
    //     return "";
    // } else {
    //     return str + repeatStringNumTimes(str, num - 1);
    // }
}

console.log(repeatStringNumTimes("abc", 3));

/*
repeatStringNumTimes("*", 3)deve retornar a string ***.

repeatStringNumTimes("abc", 3)deve retornar a string abcabcabc.

repeatStringNumTimes("abc", 4)deve retornar a string abcabcabcabc.

repeatStringNumTimes("abc", 1)deve retornar a string abc.

repeatStringNumTimes("*", 8)deve retornar a string ********.

repeatStringNumTimes("abc", -2)deve retornar uma string vazia ( "").

O repeat()método embutido não deve ser usado.

repeatStringNumTimes("abc", 0)deve retornar "".
*/