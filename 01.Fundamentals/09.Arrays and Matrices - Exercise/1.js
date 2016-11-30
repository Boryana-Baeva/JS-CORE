function printArray(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));
}
printArray(["One","Two","Three","Four","Five","-"]);