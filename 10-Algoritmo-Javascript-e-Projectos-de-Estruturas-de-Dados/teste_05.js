function checkCashRegister(price, cash, cid) {
    currencyUnit = {
        "ONE HUNDRED": 100,
        TWENTY: 20,
        TEN: 10,
        FIVE: 5,
        ONE: 1,
        QUARTER: 0.25,
        DIME: 0.1,
        NICKEL: 0.05,
        PENNY: 0.01,
    };

    let change = cash - price;
    let obj = {};
    let notas = {};

    cid.forEach((element) => {
        notas[element[0]] = Math.ceil(element[1] / currencyUnit[element[0]]);
    });

    while (change > 0) {
        for (const equivalDolar in currencyUnit) {
            if (change >= currencyUnit[equivalDolar]) {
                if (notas[equivalDolar] > 0) {
                    if (obj.hasOwnProperty(equivalDolar)) {
                        obj[equivalDolar] += currencyUnit[equivalDolar];
                    } else {
                        obj[equivalDolar] = currencyUnit[equivalDolar];
                    }
                    change = change - currencyUnit[equivalDolar];
                    notas[equivalDolar]--;

                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log(change);
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [
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
