/*
Boo quem
Verifique se um valor é classificado como um primitivo booleano. Retorne trueou false.

Os primitivos booleanos são truee false.
*/

function booWho(bool) {
    //return typeof bool  === typeof false;
    return typeof bool === "boolean";
}

console.log(booWho(null));

console.log(booWho(true)); //deve retornar true.

console.log(booWho(false)); //deve retornar true.

console.log(booWho([1, 2, 3])); //deve retornar false.

console.log(booWho([].slice)); //deve retornar false.

console.log(booWho({ "a": 1 })); //deve retornar false.

console.log(booWho(1));//deve retornar false.

console.log(booWho(NaN)); //deve retornar false.

console.log(booWho("a")); //deve retornar false.

console.log(booWho("true")); //deve retornar false.

console.log(booWho("false")); //deve retornar false.