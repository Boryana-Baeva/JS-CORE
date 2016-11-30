function findVarNames([str]) {

    let pattern = /\b_([a-zA-z0-9]+)\b/g;
    let result = [];
    let match = pattern.exec(str);
    while (match){
        result.push(match[1]);
        match = pattern.exec(str);
    }
    console.log(result.join(','));
}

findVarNames(['The _id and _age variables are both integers.']);