/*
Emparelhamento de DNA
A fita de DNA está sem o elemento de emparelhamento. Pegue cada caractere, obtenha seu par e retorne os resultados como uma matriz 2d.

Os pares de bases são um par de AT e CG. Combine o elemento ausente com o caractere fornecido.

Retorne o caractere fornecido como o primeiro elemento em cada matriz.

Por exemplo, para a entrada GCG, retorne[["G", "C"], ["C","G"], ["G", "C"]]

O personagem e seu par são emparelhados em uma matriz, e todas as matrizes são agrupadas em uma matriz de encapsulamento.
*/
function pairElement(str) {
    // let endArray = [];
    // let dna = {
    //     'A': 'T',
    //     'T': 'A',
    //     'C': 'G',
    //     'G': 'C'
    // }
    // str.split("").forEach(letter => {
    //     endArray.push([letter, dna[letter]]);
    // })
    /************************************ */
    // let endArray = [];
    // str.split("").forEach((letter) => {
        // if (letter === "C") {
            // endArray.push([letter, "G"]);
        // } else if (letter === "G") {
            // endArray.push([letter, "C"]);
        // } else if (letter === "A") {
            // endArray.push([letter, "T"]);
        // } else if (letter === "T") {
            // endArray.push([letter, "A"]);
        // }
    // });
    /************************************ */
    // var endArray = [];
    // var search = function (char) {
    //     switch (char) {
    //         case "A":
    //             endArray.push(["A", "T"]);
    //             break;
    //         case "T":
    //             endArray.push(["T", "A"]);
    //             break;
    //         case "C":
    //             endArray.push(["C", "G"]);
    //             break;
    //         case "G":
    //             endArray.push(["G", "C"]);
    //             break;
    //     }
    // };
    // for (var i = 0; i < str.length; i++) {
    //     search(str[i]);
    // }
    /******************************* */
    var endArray = [];
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };
    var endArray = str.split("").map((x) => [x, pairs[x]]);
    console.log(endArray)
}

pairElement("GCG");

pairElement("ATCGA"); // deve retornar [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG"); // deve retornar [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA"); // deve retornar [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
