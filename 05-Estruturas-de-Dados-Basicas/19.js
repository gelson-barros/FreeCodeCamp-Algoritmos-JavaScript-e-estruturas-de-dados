/*
Gere uma matriz de todas as chaves de objeto com Object.keys ()
Também podemos gerar um array que contém todas as chaves armazenadas em um objeto usando o Object.keys()método e passando um objeto como argumento. Isso retornará uma matriz com strings que representam cada propriedade no objeto. Novamente, não haverá uma ordem específica para as entradas na matriz.

Termine de escrever a getArrayOfUsersfunção para que ela retorne um array contendo todas as propriedades do objeto que recebe como argumento.
*/

let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
}

console.log(getArrayOfUsers(users));

/*
O usersobjeto deve conter apenas as teclas Alan, Jeff, SaraheRyan

A getArrayOfUsersfunção deve retornar uma matriz que contém todas as chaves do usersobjeto
*/