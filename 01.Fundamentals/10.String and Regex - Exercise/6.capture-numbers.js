function captureNums(input) {
    let numbers = [];
    let pattern = /[0-9]+/g;
    for (let line of input){
        let match = line.match(pattern);
        if (match)numbers.push(match.join(' '));

    }
    console.log(numbers.join(' '));
}

captureNums(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);