function positiveNegativeNums(input) {
    input = input.map(Number);
    let output = [];

    for (let element of input) {
        if (element < 0) output.unshift(element);
        else output.push(element);
    }

    output.forEach(element => console.log(element));
}


positiveNegativeNums(['7', '-2', '8', '9']);