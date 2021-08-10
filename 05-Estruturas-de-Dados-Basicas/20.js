/*
Modificar uma matriz armazenada em um objeto
Agora você viu todas as operações básicas para objetos JavaScript. Você pode adicionar, modificar e remover pares de valor-chave, verificar se as chaves existem e iterar em todas as chaves em um objeto. Conforme você continua aprendendo JavaScript, verá aplicações ainda mais versáteis de objetos. Além disso, as lições de Estruturas de Dados localizadas na seção Preparação para Entrevista de Codificação do currículo também cobrem os objetos ES6 Map e Set , ambos semelhantes a objetos comuns, mas fornecem alguns recursos adicionais. Agora que você aprendeu o básico sobre arrays e objetos, está totalmente preparado para começar a lidar com problemas mais complexos usando JavaScript!

Dê uma olhada no objeto que fornecemos no editor de código. O userobjeto contém três chaves. A datachave contém cinco chaves, uma das quais contém uma matriz de friends. A partir disso, você pode ver como os objetos são flexíveis como estruturas de dados. Começamos a escrever uma função addFriend. Termine de escrevê-lo de forma que pegue um userobjeto e adicione o nome do friendargumento ao array armazenado user.data.friendse retorne esse array.
*/

let user = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: ["Sam", "Kira", "Tomo"],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
        },
    },
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
}

console.log(addFriend(user, "Pete"));

/*
O userobjeto deve ter name, agee datachaves.

A addFriendfunção deve aceitar um userobjeto e uma friendstring como argumentos e adicionar o amigo ao array de friendsno userobjeto.

addFriend(user, "Pete")deve retornar ["Sam", "Kira", "Tomo", "Pete"].
*/