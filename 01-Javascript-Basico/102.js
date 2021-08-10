/*
Pesquisa de PerfilPassado
Temos uma série de objetos que representam diferentes pessoas em nossas listas de contatos.

Uma lookUpProfilefunção que recebe namee uma propriedade ( prop) como argumentos foi pré-escrita para você.

A função deve verificar se nameé um contato real firstNamee se a propriedade fornecida ( prop) é uma propriedade desse contato.

Se ambos forem verdadeiros, retorne o "valor" dessa propriedade.

Se namenão corresponder a nenhum contato, retorne a string No such contact.

Se propnão corresponder a nenhuma propriedade válida de um contato encontrado para corresponder, nameentão retorne a string No such property.
*/

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

lookUpProfile("Akira", "likes");

/*
lookUpProfile("Kristian", "lastName") deve retornar a string Vos

lookUpProfile("Sherlock", "likes") deveria retornar ["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes") deve retornar um array

lookUpProfile("Bob", "number") deve retornar a string No such contact

lookUpProfile("Bob", "potato") deve retornar a string No such contact

lookUpProfile("Akira", "address") deve retornar a string No such property
*/