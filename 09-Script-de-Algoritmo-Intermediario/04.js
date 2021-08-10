/*
Portanto és
Faça uma função que examine uma matriz de objetos (primeiro argumento) e retorne uma matriz de todos os objetos que possuem pares de nome e valor correspondentes (segundo argumento). Cada par de nome e valor do objeto de origem deve estar presente no objeto da coleção se for incluído na matriz retornada.

Por exemplo, se o primeiro argumento for [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]e o segundo argumento for { last: "Capulet" }, você deve retornar o terceiro objeto da matriz (o primeiro argumento), porque ele contém o nome e seu valor, que foi passado como o segundo argumento.
*/

/*
se os keys obj source esta num dos objs collections
se tem o mesmo valor os keys iguais de cada objecto 

*/
function whatIsInAName(collection, source) {
    // let sourceKeys = Object.keys(source);
    // return collection.filter(obj => {
    //     return sourceKeys.map(key =>{
    //         // console.log(obj.hasOwnProperty(key) && obj[key] === source[key]);
    //         return obj.hasOwnProperty(key) && obj[key] === source[key];
    //     })
    //     .reduce((a, b) => {
    //         console.log(a, b, a && b)
    //         return a && b;
    //     })
    // })


    // let sourceKeys = Object.keys(source);
    // return collection.filter(obj => {
    //     for (let i = 0; i < sourceKeys.length; i++) {
    //         console.log(obj,source,!obj.hasOwnProperty(sourceKeys[i]), sourceKeys[i], obj[sourceKeys[i], source[sourceKeys[i]]], obj[sourceKeys[i] !== source[sourceKeys[i]]]);
    //         if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i] !== source[sourceKeys[i]]]){
    //             return false
    //         }
    //     }
    //     return true;
    // })




    let sourceKeys = Object.keys(source);
    return collection.filter(obj => {
        return sourceKeys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
    })
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
// deve retornar [{ first: "Tybalt", last: "Capulet" }]
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// deve retornar [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// deve retornar [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
// console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
// deveria retornar []

/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })deve retornar [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })deve retornar [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })deve retornar [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })deve retornar [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })deve retornar [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) deveria retornar []*/