/*
Truncar uma string
Truncar uma string (primeiro argumento) se for maior do que o comprimento máximo de string fornecido (segundo argumento). Retorne a string truncada com um ...final.
*/

// function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     if (str.length > num) {
//         return str.slice(0, num) + "...";
//     } else {
//         return str;
//     }
// }


function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' :str;

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));//Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));//A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));//A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1));//A...
console.log(truncateString("Absolutely Longer", 2));//Ab...


/*
truncateString("A-tisket a-tasket A green and yellow basket", 8)deve retornar a string A-tisket....

truncateString("Peter Piper picked a peck of pickled peppers", 11)deve retornar a string Peter Piper....

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)deve retornar a string A-tisket a-tasket A green and yellow basket.

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)deve retornar a string A-tisket a-tasket A green and yellow basket.

truncateString("A-", 1)deve retornar a string A....

truncateString("Absolutely Longer", 2)deve retornar a string Ab....
*/