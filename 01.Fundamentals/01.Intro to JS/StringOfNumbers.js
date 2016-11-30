function concatenateNumbers1ToN([n]) {
    let result = '';
    for(let i = 1; i <= n; i++){
        result += i;
    }
    console.log(result);
}

concatenateNumbers1ToN(['10']);