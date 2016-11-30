function functionalCalculator([num1, num2, operator]) {
    [num1,  num2] = [num1, num2].map(Number);

    let calculate = function(num1, num2, operator) { return operator(num1, num2) };

    let add = function(num1, num2) { return num1 + num2 };
    let subtract = function(num1, num2) { return num1 - num2 };
    let multiply = function(num1, num2) { return num1 * num2 };
    let divide = function(num1, num2) { return num1 / num2 };

    switch (operator) {
        case '+': return calculate(num1, num2, add);
        case '-': return calcuate(num1, num2, subtract);
        case '*': return calculate(num1, num2, multiply);
        case '/': return calculate(num1, num2, divide);
    }

}

console.log(functionalCalculator(['2', '4', '+']));