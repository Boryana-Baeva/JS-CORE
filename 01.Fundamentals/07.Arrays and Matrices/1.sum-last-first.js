function sumLastFirst(input) {
    input = input.map(Number);
    let first = input[0];
    let last = input[input.length - 1];

    return first + last;
}

console.log(sumLastFirst(['5', '10']));