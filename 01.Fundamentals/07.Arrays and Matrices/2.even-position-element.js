function evenPositionElements(input) {
    let elem = [];
    for (let i = 0; i < input.length; i += 2) {
        elem.push(input[i]);
    }
    return elem.join(" ");
}

console.log(evenPositionElements(['20', '30', '40']));