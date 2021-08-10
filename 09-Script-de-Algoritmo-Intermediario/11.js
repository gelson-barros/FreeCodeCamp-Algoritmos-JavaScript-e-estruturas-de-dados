/*
Converter entidades HTML
Converter os caracteres &, <, >, "(aspas duplas), e '(apóstrofo), em uma seqüência às suas entidades HTML correspondentes.
*/
function convertHTML(str) {
    let entityHTML = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    let endHTML = "";
    endHTML = str.replace(/([&<>\"'])/g, match=>entityHTML[match]);
    console.log(endHTML);
}

// function convertHTML(str) {
//     // Use Object Lookup to declare as many HTML entities as needed.
//     const htmlEntities = {
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         '"': "&quot;",
//         "'": "&apos;",
//     };
//     //Use map function to return a filtered str with all entities changed automatically.
//     return str
//         .split("")
//         .map((entity) => htmlEntities[entity] || entity)
//         .join("");
// }

convertHTML("Dolce & Gabbana");
convertHTML("Dolce & Gabbana"); // deve retornar a string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos"); // deve retornar a string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve"); // deve retornar a string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"'); // deve retornar a string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List"); // deve retornar a string Schindler&apos;s List.

convertHTML("<>"); // deve retornar a string &lt;&gt;.

convertHTML("abc"); // deve retornar a string abc.
