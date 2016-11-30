function cookingByNumbers([number, op1, op2, op3, op4, op5]) {
    number = Number(number);

    let result = number;
    for (let i = 0; i <= 5; i++) {
     result = operate(result,[op1, op2, op3, op4, op5][i]);
        console.log(result);
    }

    function operate(x, operation) {
        if (operation === "chop") return x / 2;
        else if (operation === "dice") return Math.sqrt(x);
        else if (operation === "spice") return x + 1;
        else if (operation === "bake") return x * 3;
        else if (operation === "fillet") return x - 0.2 * x;

    }

}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);