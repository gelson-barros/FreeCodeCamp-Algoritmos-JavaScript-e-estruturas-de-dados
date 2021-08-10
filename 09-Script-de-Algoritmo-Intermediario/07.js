/*
Pesquisar e substituir
Faça uma pesquisa e substitua a frase usando os argumentos fornecidos e retorne a nova frase.

O primeiro argumento é a frase para realizar a busca e substituição.

O segundo argumento é a palavra que você substituirá (antes).

O terceiro argumento é o que você substituirá o segundo argumento por (depois).

Nota: Preserve a caixa do primeiro caractere na palavra original ao substituí-lo. Por exemplo, se você pretende substituir a palavra Bookpela palavra dog, ela deve ser substituída comoDog
*/
function myReplace(str, before, after) {
    // let regex = /^[A-Z]+/;
    // let strRegex = before.match(regex);
    // after = strRegex === null ? after.toLowerCase() : after.replace(after.match(/^\w/) ,after[0].toUpperCase()); 
    // str = str.replace(before, after);
    // console.log(str);
    /******************************** */
    // var index = str.indexOf(before);
    // if (str[index] === str[index].toUpperCase()) {
    //     after = after.charAt(0).toUpperCase() + after.slice(1);
    // } else {
    //     after = after.charAt(0).toLowerCase() + after.slice(1);
    // }
    // str = str.replace(before, after);
    // console.log(str);
    /******************************* */
    // if (/^[A-Z]/.test(before)) {
    //     after = after[0].toUpperCase() + after.substring(1);
    // } else {
    //     after = after[0].toLowerCase() + after.substring(1);
    // }
    // str = str.replace(before, after);
    // console.log(str);
    /******************************* */
    const myArr = str.split(" ");
    const [wordToReplace] = myArr.filter((item) => item === before);
    str = wordToReplace[0].toUpperCase() !== wordToReplace[0]
        ? myArr.map((item) => (item === before ? after : item)).join(" ")
        : myArr
              .map((item) =>
                  item === before
                      ? after[0].toUpperCase() + after.slice(1)
                      : item
              )
              .join(" ");
    console.log(str)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("Let us go to the store", "store", "mall") // deve retornar a string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // deve retornar a string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") // deve retornar a string I think we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") // deve retornar a string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") // deve retornar a string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") // deve retornar a string Let us get back to more Algorithms.