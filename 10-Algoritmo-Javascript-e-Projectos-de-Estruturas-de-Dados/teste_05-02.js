function roundFloatNumber(num, digit){
    let numString = String(+num).split("");
    let indexComma = numString.indexOf(".");
    let determinantDigit = digit + 1;
    if (numString[indexComma + determinantDigit] >= 5) {
        numString[indexComma + digit]++;
    }
    return Number(
        numString
            .filter((value, index) => index < indexComma + determinantDigit)
            .join("")
    );
}
function checkCashRegister(price, cash, cid) {
    let currencyUnit = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01,
    };

    let arrResultado = [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0],
    ]

    
    let changeMoney = cash - price;
    let sumCashRegister = cid.reverse().reduce((a,b)=> a + b[1], 0);
    let notas = {};
    cid.forEach((element) => {
        notas[element[0]] = Math.ceil(element[1] / currencyUnit[element[0]]);
    });

    if (sumCashRegister === changeMoney) {
        return { status: "CLOSED", change: cid.reverse() };
    }else if (changeMoney > sumCashRegister) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }else if (changeMoney < sumCashRegister) {
        for (let i = 0; i < cid.length; i++) {
            while (changeMoney >= currencyUnit[cid[i][0]] && notas[cid[i][0]] > 0) {
                if (changeMoney >= 0.01){
                    changeMoney = roundFloatNumber(changeMoney - currencyUnit[cid[i][0]], 2);
                    notas[cid[i][0]]--;
                    arrResultado[i][1] += currencyUnit[cid[i][0]];
                } else {
                    return { status: "INSUFFICIENT_FUNDS", change: [] };
                }   
            } 
        }
        if(changeMoney === 0){
            return { status: "OPEN", change: [...arrResultado.filter((elem) => elem[1] !== 0)]};
        }else{
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }    
}
console.log(
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);

