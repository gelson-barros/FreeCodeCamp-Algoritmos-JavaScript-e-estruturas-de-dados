/*
Porco latino
Pig Latin é uma maneira de alterar as palavras em inglês. As regras são as seguintes:

- Se uma palavra começa com uma consoante, pegue a primeira consoante ou encontro consonantal, mova-o para o final da palavra e acrescente ay a ele.

- Se uma palavra começar com vogal, basta adicionar way no final.

Traduza a string fornecida para Pig Latin. As strings de entrada são garantidamente palavras em inglês, todas em minúsculas.

*/
function translatePigLatin(str) {
    // let consonantRegex = /^[^aeiou]+/
    // let myconsonants = str.match(consonantRegex);
    // str = myconsonants !== null
    //     ? str
    //         .replace(consonantRegex, "")
    //         .concat(myconsonants)
    //         .concat("ay")
    //     : str.concat("way");
    // console.log(str);
    /********************************** */
    // var pigLatin = "";
    // var regex = /[aeiou]/gi;
    // if(str[0].match(regex)){
    //     pigLatin = str + "way";
    // }else {
    //     var vowelIndice = str.indexOf(str.match(regex)[0]);

    //     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    //     // console.log(str.substr(0, vowelIndice));
    // }
    // console.log(pigLatin)
    /********************************** */
    // if(str.match(/^[aeiou]/)) {
    //     return str + "way";
    // }
    // const consonantCluster = str.match(/^[^aeiou]+/)[0]
    // return str.substring(consonantCluster.length) + consonantCluster + "ay";
    /*********************************** */
    // str = str
    //     .replace(/^[aeiou]\w*/, "$&way")
    //     .replace(/^([^aeiou]+)(\w*)/, "$2$1ay");
    // console.log(str)

}

// function translatePigLatin(str, charPos = 0) {
//     return ["a", "e", "i", "o", "u"].includes(str[0])
//         ? str + (charPos === 0 ? "way" : "ay")
//         : charPos === str.length
//         ? str + "ay"
//         : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// }

translatePigLatin("consonant");

translatePigLatin("california")// deve retornar a string aliforniacay.

translatePigLatin("paragraphs")// deve retornar a string aragraphspay.

translatePigLatin("glove")// deve retornar a string oveglay.

translatePigLatin("algorithm")// deve retornar a string algorithmway.

translatePigLatin("eight")// deve retornar a string eightway.

// Deve lidar com palavras onde a primeira vogal surge no meio da palavra. translatePigLatin("schwartz")deve retornar a string artzschway.

// Deve lidar com palavras sem vogais. translatePigLatin("rhythm")deve retornar a string rhythmay.