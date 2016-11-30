function radicalMarketing(input) {
    let names = new Set();

    for (let line of input){
        line = line.split('-');
        names.add(line[0]);

    }
    console.log(names.keys());
    console.log(names.entries());
}

radicalMarketing(["A","B","C","D","A-B","B-A","C-A","D-A"]);