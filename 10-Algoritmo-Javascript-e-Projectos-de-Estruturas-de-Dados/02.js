/*
Conversor de Numeral Romano
Converta o número fornecido em um algarismo romano.

Todas as respostas em algarismos romanos devem ser fornecidas em maiúsculas.
*/
// function convertToRoman(num) {
//     /*
//   Main IDea
//   convert num to str
//   convert each str char to it's corresponding Roman number considering it's order
//   join the result
//   */
//     var str = "";
//     str += num;
//     var result = [];
//     var res1 = "";
//     var res2 = "";
//     var res3 = "";
//     var res4 = "";
//     if (str.length == 0) {
//         result = [];
//     } else if (str.length > 0) {
//         switch (str[str.length - 1]) {
//             case "1":
//                 res1 = "I";
//                 break;
//             case "2":
//                 res1 = "II";
//                 break;
//             case "3":
//                 res1 = "III";
//                 break;
//             case "4":
//                 res1 = "IV";
//                 break;
//             case "5":
//                 res1 = "V";
//                 break;
//             case "6":
//                 res1 = "VI";
//                 break;
//             case "7":
//                 res1 = "VII";
//                 break;
//             case "8":
//                 res1 = "VIII";
//                 break;
//             case "9":
//                 res1 = "IX";
//                 break;
//         }
//         switch (str[str.length - 2]) {
//             case "1":
//                 res2 = "X";
//                 break;
//             case "2":
//                 res2 = "XX";
//                 break;
//             case "3":
//                 res2 = "XXX";
//                 break;
//             case "4":
//                 res2 = "XL";
//                 break;
//             case "5":
//                 res2 = "L";
//                 break;
//             case "6":
//                 res2 = "LX";
//                 break;
//             case "7":
//                 res2 = "LXX";
//                 break;
//             case "8":
//                 res2 = "LXXX";
//                 break;
//             case "9":
//                 res2 = "XC";
//                 break;
//         }
//         switch (str[str.length - 3]) {
//             case "1":
//                 res3 = "C";
//                 break;
//             case "2":
//                 res3 = "CC";
//                 break;
//             case "3":
//                 res3 = "CCC";
//                 break;
//             case "4":
//                 res3 = "CD";
//                 break;
//             case "5":
//                 res3 = "D";
//                 break;
//             case "6":
//                 res3 = "DC";
//                 break;
//             case "7":
//                 res3 = "DCC";
//                 break;
//             case "8":
//                 res3 = "DCCC";
//                 break;
//             case "9":
//                 res3 = "CM";
//                 break;
//         }
//         switch (str[str.length - 4]) {
//             case "1":
//                 res4 = "M";
//                 break;
//             case "2":
//                 res4 = "MM";
//                 break;
//             case "3":
//                 res4 = "MMM";
//                 break;
//         }
//     }
//     result.push(res4, res3, res2, res1);
//     return result.join("");
// }

// function convertToRoman(num) {
//     var arabicToRoman = {
//         1: "I",
//         2: "II",
//         3: "III",
//         4: "IV",
//         5: "V",
//         6: "VI",
//         7: "VII",
//         8: "VIII",
//         9: "IX",
//         10: "X",
//         20: "XX",
//         30: "XXX",
//         40: "XL",
//         50: "L",
//         60: "LX",
//         70: "LXX",
//         80: "LXXX",
//         90: "XC",
//         100: "C",
//         200: "CC",
//         300: "CCC",
//         400: "CD",
//         500: "D",
//         600: "DC",
//         700: "DCC",
//         800: "DCCC",
//         900: "CM",
//         1000: "M",
//         2000: "MM",
//         3000: "MMM",
//     };

//     var digits = String(+num).split(""); //array with digits
//     var result = ""; //empty result initialized
//     for (var i = 0; i < digits.length; i++) {
//         var lookupKey = digits[i] * Math.pow(10, digits.length - i - 1); //find the key of the current index value multiplied by power of 10^i
//         if (arabicToRoman[lookupKey]) {
//             result += arabicToRoman[lookupKey];
//         }
//     }
//     return result;
// }


function convertToRoman(num){
    var arabicToRoma = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM",
    }
    let arr = [1, 10, 100, 1000]
    let digits = String(+num).split("").reverse();
    let newArr = []
    
    for (let i = 0; i < digits.length; i++) {
        newArr.push(Number(digits[i]*arr[i]))
    }
    return newArr.reverse().map((nr) => arabicToRoma[nr]).join('');
}
console.log(convertToRoman(36));

console.log(convertToRoman(2)); // deve retornar a string II.

console.log(convertToRoman(3)); // deve retornar a string III.

console.log(convertToRoman(4)); // deve retornar a string IV.

console.log(convertToRoman(5)); // deve retornar a string V.

console.log(convertToRoman(9)); // deve retornar a string IX.

console.log(convertToRoman(12)); // deve retornar a string XII.

console.log(convertToRoman(16)); // deve retornar a string XVI.

console.log(convertToRoman(29)); // deve retornar a string XXIX.

console.log(convertToRoman(44)); // deve retornar a string XLIV.

console.log(convertToRoman(45)); // deve retornar a string XLV.

console.log(convertToRoman(68)); // deve retornar a string LXVIII

console.log(convertToRoman(83)); // deve retornar a string LXXXIII

console.log(convertToRoman(97)); // deve retornar a string XCVII

console.log(convertToRoman(99)); // deve retornar a string XCIX

console.log(convertToRoman(400)); // deve retornar a string CD

console.log(convertToRoman(500)); // deve retornar a string D

console.log(convertToRoman(501)); // deve retornar a string DI

console.log(convertToRoman(649)); // deve retornar a string DCXLIX

console.log(convertToRoman(798)); // deve retornar a string DCCXCVIII

console.log(convertToRoman(891)); // deve retornar a string DCCCXCI

console.log(convertToRoman(1000)); // deve retornar a string M

console.log(convertToRoman(1004)); // deve retornar a string MIV

console.log(convertToRoman(1006)); // deve retornar a string MVI

console.log(convertToRoman(1023)); // deve retornar a string MXXIII

console.log(convertToRoman(2014)); // deve retornar a string MMXIV

console.log(convertToRoman(3999)); // deve retornar a string MMMCMXCIX
