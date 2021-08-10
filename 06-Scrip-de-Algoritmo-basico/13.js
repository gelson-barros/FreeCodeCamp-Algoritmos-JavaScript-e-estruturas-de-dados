/*
Falsy Bouncer
Remova todos os valores falsos de uma matriz.

Valores Falsas em JavaScript são false, null, 0, "", undefined, e NaN.

Dica: tente converter cada valor em um booleano.
*/

function bouncer(arr) {

    // let newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]) newArray.push(arr[i]);
    // }
    // return newArray;


    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!!arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr

    // return arr.filter(Boolean);
}

// bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9])) // deve retornar [7, "ate", 9].

// bouncer(["a", "b", "c"]) // deve retornar ["a", "b", "c"].

// bouncer([false, null, 0, NaN, undefined, ""]) // deve retornar [].

// bouncer([null, NaN, 1, 2, undefined]) // deve retornar [1, 2].