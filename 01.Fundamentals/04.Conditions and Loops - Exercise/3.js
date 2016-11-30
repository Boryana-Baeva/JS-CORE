function oddNums1ToN([n]) {
    for (let i = 1; i <= Number(n); i++) {
     if(i % 2 == 0)continue;
     console.log(i)
    }
}

oddNums1ToN(['25']);