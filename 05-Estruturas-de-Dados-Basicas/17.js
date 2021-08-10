/*
Verifique se um objeto tem uma propriedade
Agora podemos adicionar, modificar e remover chaves de objetos. Mas e se apenas quiséssemos saber se um objeto tem uma propriedade específica? JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o hasOwnProperty()método e o outro usa a inpalavra - chave. Se tivermos um objeto userscom uma propriedade de Alan, poderíamos verificar sua presença de uma das seguintes maneiras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos retornariam true.

Terminar de escrever a função para que ele retorna true se o objeto passado para ele contém todos os quatro nomes, Alan, Jeff, Sarahe Ryane retorna false de outra forma.
*/

let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: true,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    // if (
    //     userObj.hasOwnProperty("Alan") &&
    //     userObj.hasOwnProperty("Jeff") &&
    //     userObj.hasOwnProperty("Sarah") &&
    //     userObj.hasOwnProperty("Ryan")
    // ) {
    //     return true;
    // }
    // return false;

    return ['Alan ', 'Jeff', 'Sarah', 'Ryan'].every(name => {userObj.hasOwnProperty(name)});
    // Only change code above this line
}

console.log(isEveryoneHere(users));

/*
O usersobjeto não deve ser acessado diretamente

O usersobjeto deve conter apenas as teclas Alan, Jeff, SaraheRyan

A função isEveryoneHeredeve retornar truese Alan, Jeff, Sarah, e Ryansão propriedades no objeto passado para ele.

A função isEveryoneHeredeve retornar falsese Alannão for uma propriedade do objeto passado a ela.

A função isEveryoneHeredeve retornar falsese Jeffnão for uma propriedade do objeto passado a ela.

A função isEveryoneHeredeve retornar falsese Sarahnão for uma propriedade do objeto passado a ela.

A função isEveryoneHeredeve retornar falsese Ryannão for uma propriedade do objeto passado a ela.
*/