function addAndRemove(input) {
    let number = 1;
    let arr = [];
    for (let command of input){
        if (command === "add") arr.push(number);
        else if (command === "remove") arr.pop();
        number ++;
    }
    if (arr.length > 0) console.log(arr.join('\n'));
    else console.log("Empty");
}

addAndRemove(["add","add","add","add"]);
addAndRemove(["remove","remove","remove"]);