/*
Caixa registradora
Projete uma função da gaveta da caixa registradora checkCashRegister() que aceite o preço de compra como o primeiro argumento ( price), o pagamento como o segundo argumento ( cash) e o dinheiro na gaveta ( cid) como o terceiro argumento.

cid é uma moeda disponível com lista de array 2D.

A checkCashRegister()função sempre deve retornar um objeto com uma status chave e uma change chave.

Devolva {status: "INSUFFICIENT_FUNDS", change: []}se o dinheiro na gaveta for inferior ao troco devido ou se você não puder devolver o troco exato.

Devolva {status: "CLOSED", change: [...]} com o dinheiro na gaveta como o valor da chave change se for igual ao troco devido.

Caso contrário, retorna {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, classificadas da ordem mais alta para a mais baixa, conforme o valor da change chave.

Unidade monetária	    Resultar
Centavo	             $ 0,01 (PENNY)
Níquel	             $ 0,05 (NÍQUEL)
Dime	             $ 0,1 (DIME)
Trimestre	         $ 0,25 (TRIMESTRE)
Dólar	             $ 1 (UM)
Cinco dólares	     $ 5 (CINCO)
Dez dólares	         $ 10 (DEZ)
Vinte dólares	     $ 20 (VINTE)
Cem dólares	         $ 100 (CEM)
Veja abaixo um exemplo de matriz de gaveta de dinheiro:
*/
// [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
// ];

function checkCashRegister(price, cash, cid) {
    //all money values are multiplied by 100 to deal with precision errors involved with decimals
    const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

    function transaction(price, cash, cid) {
        let changeNeeded = (cash - price) * 100;
        //money will be pushed to the second value in each array
        let moneyProvided = [
            ["ONE HUNDRED", 0],
            ["TWENTY", 0],
            ["TEN", 0],
            ["FIVE", 0],
            ["ONE", 0],
            ["QUARTER", 0],
            ["DIME", 0],
            ["NICKEL", 0],
            ["PENNY", 0],
        ];
        //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
        let availCash = [...cid].reverse().map((el) => [el[0], el[1] * 100]);
        //get the total sum of all cash and divide by 100
        let sumOfCash = availCash.reduce((a, b) => a + b[1], 0) / 100;
        //if sumOfCash is exact change needed return
        if (sumOfCash === changeNeeded / 100) {
            return { status: "CLOSED", change: [...cid] };
        }
        //else, run this function
        else {
            for (let i = 0; i < availCash.length; i++) {
                //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
                while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
                    //1. moneyProvided array is increased by denomination value
                    moneyProvided[i][1] += denomination[i];
                    //2. changeNeeded is decreased by same denomination value
                    changeNeeded -= denomination[i];
                    //3. availCash is also decreased by same denomination value
                    availCash[i][1] -= denomination[i];
                }
            }

            //clean up the moneyProvided array by
            let change = moneyProvided
                //1. resetting the money values by dividing by 100
                .map((el) => [el[0], el[1] / 100])
                //2. filtering out all non-empty dollar and value arrays
                .filter((el) => el[1] !== 0);
            //calculate the total of the change array
            let changeTotal = change.reduce((a, b) => a + b[1], 0);
            //if the total change is less than the change needed
            if (changeTotal < changeNeeded) {
                return { status: "INSUFFICIENT_FUNDS", change: [] };
            }
            return { status: "OPEN", change };
        }
    }

    //this is where the transaction function is called
    let answer = transaction(price, cash, cid);
    //here the final answer is provided if the 2 if statements don't catch it first
    console.log(answer);
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);

/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) deve retornar um objeto.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])deve retornar {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])deve retornar {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])deve retornar {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])deve retornar {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])deve retornar {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
